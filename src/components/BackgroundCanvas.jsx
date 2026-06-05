import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import NodeNetwork from './NodeNetwork';

const BackgroundCanvas = ({ themeColor }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundColor: '#050505',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        style={{ pointerEvents: 'auto' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#050505', 1);
        }}
      >
        <Suspense fallback={null}>
          <NodeNetwork themeColor={themeColor} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
