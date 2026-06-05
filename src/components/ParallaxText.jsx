import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxText = ({ text }) => {
  const ref = useRef(null);
  
  // Track the scroll progress of this specific component within the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map the scroll progress from 0 -> 1 to a Y translation of 150px -> -150px
  // This causes the text to move upward slower than the normal scroll speed
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div ref={ref} style={{ overflow: 'hidden', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <motion.h1
        style={{
          y,
          fontSize: 'clamp(5rem, 15vw, 12rem)',
          fontWeight: 900,
          color: 'var(--border-subtle)', // Very dim background text
          letterSpacing: '0.1em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          margin: 0,
          lineHeight: 1
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default ParallaxText;
