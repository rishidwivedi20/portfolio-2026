import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import ParallaxText from './ParallaxText';
import DecryptHeader from './DecryptHeader';

const Footer = () => {
  return (
    <section id="contact" style={{ position: 'relative', padding: '8rem 0', overflow: 'hidden', borderTop: '1px solid var(--border-subtle)' }}>
      
      {/* Background Watermark Text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        transform: 'translateY(-50%)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.3
      }}>
        <ParallaxText text="CONNECT" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        
        <DecryptHeader text="CONTACT." delay={0.2} />

        <div style={{ width: '100%', marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2.5rem', flex: 1, minWidth: '300px' }}>
            
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.6,
              maxWidth: '500px'
            }}>
              System ready for incoming transmissions. Currently open for new opportunities and collaborations.
              <br /><br />
              <span style={{ color: 'var(--accent-primary)' }}>SECURE_LINE:</span> +91 9561298953
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
              
              <motion.a 
                href="mailto:rishidwi2003@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-dark)',
                  padding: '1rem 2rem',
                  borderRadius: '2rem',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Mail size={18} />
                INITIALIZE EMAIL
              </motion.a>

              <motion.a 
                href="https://drive.google.com/file/d/1etHLcfTj_thx6Y95ktF21IFxFaNAdvUw/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  padding: '1rem 2rem',
                  borderRadius: '2rem',
                  border: '1px solid var(--border-focus)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Download size={18} />
                DOWNLOAD RESUME
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rishi-dwivedi-96971a251/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-focus)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s'
                }}
              >
                <FaLinkedin size={20} />
              </motion.a>

              <motion.a
                href="https://github.com/rishidwivedi20"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-focus)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s'
                }}
              >
                <FaGithub size={20} />
              </motion.a>

            </div>
          </div>

          <motion.a
            href="https://www.linkedin.com/in/rishi-dwivedi-96971a251/"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              border: '2px solid var(--accent-primary)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-primary)',
              textDecoration: 'none',
              fontSize: '1.4rem',
              fontWeight: 600,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.02em',
              flexShrink: 0,
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.0)', /* Dynamic shadow on hover via CSS or keep clean */
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              Let's <ArrowUpRight size={22} strokeWidth={2.5} />
            </div>
            <div>Connect</div>
          </motion.a>

        </div>
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'left', marginTop: '6rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        <p>© {new Date().getFullYear()} RISHI DWIVEDI. SYSTEM ONLINE.</p>
      </div>
    </section>
  );
};

export default Footer;
