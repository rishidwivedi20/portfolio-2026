import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 150;
const BOUNDS = 18;
const HALF_BOUNDS = BOUNDS / 2;
const CONNECTION_DIST = 3.8;
const MOUSE_RADIUS = 5;
const MOUSE_STRENGTH = 0.012;
const MAX_LINES = NODE_COUNT * 12; // max edges to allocate

// Accent colors
const COLOR_WHITE = new THREE.Color('#e0e0e0');
const COLOR_ACCENT = new THREE.Color('#a855f7');
const COLOR_BLUE = new THREE.Color('#3b82f6');

const NodeNetwork = ({ themeColor = '#ef4444' }) => {
  const meshRef = useRef();
  const linesRef = useRef();
  const { camera } = useThree();

  // Convert hex to THREE.Color for useFrame
  const themeRGB = useMemo(() => new THREE.Color(themeColor), [themeColor]);

  // Pre-allocate node data: positions, velocities
  const nodeData = useMemo(() => {
    const positions = new Float32Array(NODE_COUNT * 3);
    const velocities = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * BOUNDS;
      positions[i3 + 1] = (Math.random() - 0.5) * BOUNDS;
      positions[i3 + 2] = (Math.random() - 0.5) * BOUNDS * 0.6;

      velocities[i3]     = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.004;
    }

    return { positions, velocities };
  }, []);

  // Pre-allocate line geometry buffers
  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const posArr = new Float32Array(MAX_LINES * 2 * 3); // 2 vertices per line
    const colArr = new Float32Array(MAX_LINES * 2 * 4); // RGBA per vertex
    geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colArr, 4));
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  // Shared sphere geometry and material for InstancedMesh
  const sphereGeo = useMemo(() => new THREE.SphereGeometry(0.04, 8, 6), []);
  const sphereMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        toneMapped: false,
      }),
    []
  );

  // Line material
  const lineMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  // Setup instanced mesh colors and positions
  useEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    
    // Create color attribute if it doesn't exist
    if (!meshRef.current.geometry.attributes.color) {
      const colorAttr = new THREE.InstancedBufferAttribute(
        new Float32Array(NODE_COUNT * 3),
        3
      );
      meshRef.current.geometry.setAttribute('color', colorAttr);
    }
    
    const colorAttr = meshRef.current.geometry.attributes.color;

    for (let i = 0; i < NODE_COUNT; i++) {
      const i3 = i * 3;
      dummy.position.set(
        nodeData.positions[i3],
        nodeData.positions[i3 + 1],
        nodeData.positions[i3 + 2]
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Mix of white + current theme color
      const r = Math.random();
      let col = COLOR_WHITE;
      if (r < 0.5) col = COLOR_WHITE;
      else if (r < 0.8) col = themeRGB;
      else col = COLOR_BLUE;

      colorAttr.setXYZ(i, col.r, col.g, col.b);
    }

    colorAttr.needsUpdate = true;
    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.material.vertexColors = true;
    meshRef.current.material.needsUpdate = true;
  }, [nodeData, themeRGB]);

  // Reusable temp objects
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmpVec = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (!meshRef.current || !linesRef.current) return;

    const { positions, velocities } = nodeData;
    const pointer = state.pointer; // NDC coords -1..1
    const time = state.clock.elapsedTime;

    // Map pointer to 3D world space (approximate)
    const mouseX = pointer.x * HALF_BOUNDS * 1.2;
    const mouseY = pointer.y * HALF_BOUNDS * 1.2;

    // --- Update node positions ---
    for (let i = 0; i < NODE_COUNT; i++) {
      const i3 = i * 3;

      // Apply velocity
      positions[i3]     += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];

      // Mouse gravitational pull
      const dx = mouseX - positions[i3];
      const dy = mouseY - positions[i3 + 1];
      const distMouse = Math.sqrt(dx * dx + dy * dy);

      if (distMouse < MOUSE_RADIUS && distMouse > 0.1) {
        const force = MOUSE_STRENGTH * (1 - distMouse / MOUSE_RADIUS);
        velocities[i3]     += (dx / distMouse) * force;
        velocities[i3 + 1] += (dy / distMouse) * force;
      }

      // Dampen velocity for smooth drift
      velocities[i3]     *= 0.998;
      velocities[i3 + 1] *= 0.998;
      velocities[i3 + 2] *= 0.998;

      // Wrap around bounds
      if (positions[i3] > HALF_BOUNDS) positions[i3] = -HALF_BOUNDS;
      if (positions[i3] < -HALF_BOUNDS) positions[i3] = HALF_BOUNDS;
      if (positions[i3 + 1] > HALF_BOUNDS) positions[i3 + 1] = -HALF_BOUNDS;
      if (positions[i3 + 1] < -HALF_BOUNDS) positions[i3 + 1] = HALF_BOUNDS;
      if (positions[i3 + 2] > HALF_BOUNDS * 0.5) positions[i3 + 2] = -HALF_BOUNDS * 0.5;
      if (positions[i3 + 2] < -HALF_BOUNDS * 0.5) positions[i3 + 2] = HALF_BOUNDS * 0.5;

      // Update instanced mesh matrix
      dummy.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
      // Subtle scale pulse
      const s = 1 + 0.3 * Math.sin(time * 1.5 + i * 0.4);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // --- Build line segments (edges) ---
    const linePos = lineGeo.attributes.position.array;
    const lineCol = lineGeo.attributes.color.array;
    let lineIdx = 0;

    for (let i = 0; i < NODE_COUNT; i++) {
      if (lineIdx >= MAX_LINES) break;
      const i3 = i * 3;
      const ax = positions[i3], ay = positions[i3 + 1], az = positions[i3 + 2];

      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (lineIdx >= MAX_LINES) break;
        const j3 = j * 3;
        const bx = positions[j3], by = positions[j3 + 1], bz = positions[j3 + 2];

        const dx = ax - bx;
        const dy = ay - by;
        const dz = az - bz;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DIST) {
          const alpha = 1 - dist / CONNECTION_DIST;
          const fadedAlpha = alpha * alpha * 0.5; // Quadratic fade for softness

          const v = lineIdx * 6; // 2 verts * 3 components
          linePos[v]     = ax;
          linePos[v + 1] = ay;
          linePos[v + 2] = az;
          linePos[v + 3] = bx;
          linePos[v + 4] = by;
          linePos[v + 5] = bz;

          // RGBA for each vertex
          const c = lineIdx * 8; // 2 verts * 4 components
          // Vertex A (use current theme color)
          lineCol[c]     = themeRGB.r;
          lineCol[c + 1] = themeRGB.g;
          lineCol[c + 2] = themeRGB.b;
          lineCol[c + 3] = fadedAlpha;
          // Vertex B
          lineCol[c + 4] = themeRGB.r;
          lineCol[c + 5] = themeRGB.g;
          lineCol[c + 6] = themeRGB.b;
          lineCol[c + 7] = fadedAlpha;

          lineIdx++;
        }
      }
    }

    lineGeo.setDrawRange(0, lineIdx * 2);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;

    // --- Camera parallax ---
    camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.02;
    camera.position.y += (pointer.y * 1.0 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <instancedMesh
        ref={meshRef}
        args={[sphereGeo, sphereMat, NODE_COUNT]}
        frustumCulled={false}
      />
      <lineSegments ref={linesRef} geometry={lineGeo} material={lineMat} />
    </group>
  );
};

export default NodeNetwork;
