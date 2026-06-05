import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.3)',
          letterSpacing: '0.1em'
        }}
      >
        SCROLL
      </span>
      <div
        style={{
          width: '1px',
          height: '50px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{
            y: [-15, 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: '1px',
            height: '15px',
            backgroundColor: 'var(--accent-primary)',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
