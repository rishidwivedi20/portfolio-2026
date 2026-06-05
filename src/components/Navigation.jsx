import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      {/* Animated Hamburger Button */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          zIndex: 102,
        }}
      >
        <motion.button 
          onClick={toggleMenu}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileTap={{ scale: 0.9 }}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            width: '50px',
            height: '50px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
            {/* Top Line */}
            <motion.div 
              animate={{ 
                rotate: isOpen ? 45 : 0, 
                y: isOpen ? 8 : 0,
                width: isOpen ? '28px' : (isHovered ? '14px' : '28px'),
                backgroundColor: (isOpen || isHovered) ? '#a1a1aa' : '#ffffff'
              }}
              style={{ height: '2px', borderRadius: '2px', transformOrigin: 'center' }} 
            />
            {/* Middle Line */}
            <motion.div 
              animate={{ 
                opacity: isOpen ? 0 : 1,
                width: isOpen ? '0px' : (isHovered ? '28px' : '14px'),
                backgroundColor: (isOpen || isHovered) ? '#a1a1aa' : '#ffffff'
              }}
              style={{ height: '2px', borderRadius: '2px' }} 
            />
            {/* Bottom Line */}
            <motion.div 
              animate={{ 
                rotate: isOpen ? -45 : 0, 
                y: isOpen ? -8 : 0,
                width: isOpen ? '28px' : (isHovered ? '14px' : '20px'),
                backgroundColor: (isOpen || isHovered) ? '#a1a1aa' : '#ffffff'
              }}
              style={{ height: '2px', borderRadius: '2px', transformOrigin: 'center' }} 
            />
          </div>
        </motion.button>
      </motion.nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              maxWidth: '350px',
              height: '100vh',
              backgroundColor: '#0a0a0b',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 3rem',
              borderRight: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '20px 0 50px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2rem' }}>
              {links.map((link, i) => (
                <div key={link.name} style={{ overflow: 'hidden' }}>
                  <motion.a
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0, transition: { duration: 0.3 } }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: 'inline-block',
                      fontSize: '2.5rem',
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      lineHeight: 1
                    }}
                    whileHover={{ x: 10, color: 'var(--accent-primary)', transition: { duration: 0.2 } }}
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile to click away */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={closeMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 99,
              cursor: 'pointer'
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
