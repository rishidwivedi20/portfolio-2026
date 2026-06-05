import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const bootLogs = [
  "INIT_KERNEL_V4.2.1",
  "Mounting core geometry nodes...",
  "Allocating memory buffers...",
  "Loading 3D vertex shaders...",
  "Compiling GLSL assets...",
  "Establishing Next.js environment...",
  "Fetching telemetry data...",
  "Synchronizing user state...",
  "Bypassing security protocols...",
  "Status: 200 OK",
  "SYSTEM_ONLINE"
];

const Loader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    
    // Add a new log line rapidly
    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200); // 200ms * 11 logs ~ 2.2 seconds

    // Complete loader after exactly 2.5s
    const timeout = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }} // Snaps away quickly
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000', // Pure black
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // Let text flow from bottom
        padding: '2rem',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '800px' }}>
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            style={{
              color: i === bootLogs.length - 1 ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.85rem',
            }}
          >
            <span style={{ color: 'var(--accent-primary)', marginRight: '10px' }}>&gt;</span>
            {log}
          </motion.div>
        ))}
        {/* Blinking block cursor */}
        {logs.length < bootLogs.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            style={{ width: '10px', height: '14px', backgroundColor: 'var(--accent-primary)', marginTop: '6px' }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Loader;
