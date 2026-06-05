import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const getThemeName = (color) => {
  switch(color) {
    case '#a855f7': return 'PURPLE';
    case '#ef4444': return 'CRIMSON';
    case '#10b981': return 'GREEN';
    case '#eab308': return 'YELLOW';
    case '#ffffff': return 'MONOCHROME';
    default: return 'CUSTOM';
  }
};

const TelemetryHUD = ({ themeColor = '#10b981' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${Math.round((totalScroll / windowHeight) * 100)}`;
      setScrollPos(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isHovered ? 0.8 : 0.5, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 40, // Below modals (usually 50+), above grid
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'rgba(255, 255, 255, 1)', 
        textAlign: 'right',
        lineHeight: '1.6',
        pointerEvents: 'auto',
        cursor: 'default',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
      }}
    >
      <div>POS: {scrollPos}% // STATUS: ACTIVE_CORE // THEME: <span style={{ color: 'var(--accent-primary)' }}>{getThemeName(themeColor)}</span></div>
    </motion.div>
  );
};

export default TelemetryHUD;
