import Terminal from './Terminal';
import { MapPin, Code2, Database, LayoutTemplate, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-primary)' }}>About & Skills.</h2>
        
        <div className="bento-grid">
          {/* Terminal takes full width on top */}
          <Terminal />

          {/* Location / Current Status */}
          <motion.div 
            className="bento-item interactive"
            style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            whileHover={{ scale: 0.98 }}
          >
            <div>
              <MapPin style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Bengaluru, India</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Currently studying at Manipal Institute of Technology.</p>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-secondary)', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Stats Box */}
          <motion.div 
            className="bento-item interactive"
            style={{ gridColumn: 'span 4', backgroundColor: 'var(--accent-primary)', color: 'var(--bg-dark)' }}
            whileHover={{ scale: 0.98 }}
          >
            <h3 style={{ fontSize: '4rem', lineHeight: 1, marginBottom: '0.5rem' }}>500<span style={{ fontSize: '2rem' }}>+</span></h3>
            <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>DSA Problems Solved</p>
            <p style={{ opacity: 0.8, fontSize: '0.85rem', marginTop: '1rem' }}>Ranked top 5% globally on LeetCode.</p>
          </motion.div>

          {/* Stack Summary */}
          <motion.div 
            className="bento-item interactive"
            style={{ gridColumn: 'span 4' }}
            whileHover={{ scale: 0.98 }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Core Stack</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <LayoutTemplate size={20} color="var(--accent-secondary)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>React, Next.js, Tailwind</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Code2 size={20} color="var(--accent-tertiary)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Node.js, Express, Java</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Database size={20} color="var(--accent-primary)" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>PostgreSQL, MongoDB</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
