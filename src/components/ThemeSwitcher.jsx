import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const themes = [
  { id: 'purple', color: '#a855f7' },
  { id: 'red', color: '#ef4444' },
  { id: 'green', color: '#10b981' },
  { id: 'yellow', color: '#eab308' },
  { id: 'white', color: '#ffffff' },
];

const ThemeSwitcher = ({ currentThemeColor, setThemeColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.6rem 1.2rem',
        background: 'rgba(15, 16, 17, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '2rem',
        pointerEvents: 'auto',
      }}
    >
      <motion.a
        href="https://drive.google.com/file/d/1etHLcfTj_thx6Y95ktF21IFxFaNAdvUw/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, color: 'var(--text-primary)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-secondary)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textDecoration: 'none',
          transition: 'color 0.2s',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <Download size={14} />
        RESUME
      </motion.a>
      
      <div style={{ width: '1px', height: '16px', backgroundColor: 'var(--border-subtle)' }} />

      <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--text-muted)' }}>
        THEME
      </span>
      <div style={{ display: 'flex', gap: '0.6rem' }}>
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setThemeColor(t.color)}
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: t.color,
              border: currentThemeColor === t.color ? '2px solid rgba(255, 255, 255, 0.8)' : '2px solid transparent',
              cursor: 'pointer',
              padding: 0,
              transition: 'transform 0.2s, border 0.2s',
              boxShadow: currentThemeColor === t.color ? `0 0 10px ${t.color}` : 'none'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            aria-label={`Switch to ${t.id} theme`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeSwitcher;
