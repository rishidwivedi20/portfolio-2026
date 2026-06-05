import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './GlowCard.css';

const GlowCard = ({ children, className = '', padding = '2rem', borderRadius = 'var(--radius-md)' }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glow-card-wrapper ${className}`}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
        borderRadius: borderRadius
      }}
    >
      <div className="glow-card-content" style={{ padding: padding, borderRadius: `calc(${borderRadius} - 1px)` }}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
