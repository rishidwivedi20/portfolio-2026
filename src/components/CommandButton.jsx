import React from 'react';
import { motion } from 'framer-motion';
import './CommandButton.css';

const CommandButton = ({ text, onClick, href }) => {
  const content = (
    <motion.div
      className="command-button"
      initial="rest"
      whileHover="hover"
      whileTap="hover" // Keep hover state active while tapping
    >
      <motion.span 
        className="command-bracket"
        variants={{
          rest: { x: 0, color: 'var(--text-muted)' },
          hover: { x: -8, color: 'var(--accent-primary)' }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        [
      </motion.span>
      
      <motion.span 
        className="command-text"
        variants={{
          rest: { color: 'var(--text-secondary)' },
          hover: { color: '#ffffff' }
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>

      <motion.span 
        className="command-bracket"
        variants={{
          rest: { x: 0, color: 'var(--text-muted)' },
          hover: { x: 8, color: 'var(--accent-primary)' }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        ]
      </motion.span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none', display: 'inline-block' }} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={{ background: 'none', border: 'none', padding: 0 }}>
      {content}
    </button>
  );
};

export default CommandButton;
