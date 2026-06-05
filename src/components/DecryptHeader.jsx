import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\\\/[]{}—=+*^?#________';

const DecryptHeader = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        text.split('').map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => {
        if (!hasAnimated) {
          setTimeout(scramble, delay * 1000);
          setHasAnimated(true);
        }
      }}
      style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        marginBottom: '2rem',
        color: 'var(--text-primary)',
        letterSpacing: '0.05em',
        textTransform: 'uppercase'
      }}
    >
      {displayText}
    </motion.h2>
  );
};

export default DecryptHeader;
