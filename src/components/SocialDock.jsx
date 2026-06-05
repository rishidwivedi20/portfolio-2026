import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const MagneticIcon = ({ children, href, hoverColor }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{ 
        x: position.x, 
        y: position.y,
        color: isHovered ? hoverColor : 'rgba(255, 255, 255, 0.4)' 
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '12px', 
        fontSize: '1.3rem',
        cursor: 'pointer'
      }}
    >
      {children}
    </motion.a>
  );
};

const SocialDock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        zIndex: 40, // Same level as TelemetryHUD
        display: 'flex',
        flexDirection: 'column', // Stack vertically in bottom left
        gap: '0.5rem',
        pointerEvents: 'auto'
      }}
    >
      <MagneticIcon href="https://github.com/rishidwivedi20" hoverColor="#ffffff">
        <FaGithub />
      </MagneticIcon>
      
      <MagneticIcon href="https://www.linkedin.com/in/rishi-dwivedi-96971a251/" hoverColor="#0077b5">
        <FaLinkedin />
      </MagneticIcon>
      
      <MagneticIcon href="https://leetcode.com/u/rbkd/" hoverColor="#ffa116">
        <SiLeetcode />
      </MagneticIcon>
      
      <MagneticIcon href="https://www.hackerrank.com/profile/rishidwi2003" hoverColor="#2ec866">
        <FaHackerrank />
      </MagneticIcon>
    </motion.div>
  );
};

export default SocialDock;
