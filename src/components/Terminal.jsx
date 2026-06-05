import React from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  return (
    <motion.div 
      className="bento-item interactive"
      style={{ gridColumn: 'span 12', padding: '2rem' }}
      whileHover={{ y: -2, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
    >
      <h3 style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
        My Journey
      </h3>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>
          I'm currently pursuing Computer Science with a specialization in Artificial Intelligence at Manipal Institute of Technology.
        </p>
        <p>
          Over the last few years, I've spent most of my time learning how software systems are built - from data structures and algorithms to modern web development. I've developed a strong foundation in both frontend and backend development, with experience building complete applications, designing APIs, managing databases, and creating responsive user experiences.
        </p>
        <p>
          When I'm not building projects, you'll usually find me solving coding problems, exploring new technologies, or improving something I've already built.
        </p>
        <p>
          I enjoy working on systems that are simple on the surface but complex underneath, and I'm constantly learning to become a better engineer. Right now, I'm focused on strengthening my fundamentals, building meaningful projects, and preparing for strong SDE roles.
        </p>
      </div>
    </motion.div>
  );
};

export default Terminal;
