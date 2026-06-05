import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

/* Diamond chevron icon – collapsed state: ∧ on top, ∨ on bottom (pointing away) */
const DiamondIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8,9 12,5 16,9" />
    <polyline points="8,15 12,19 16,15" />
  </svg>
);

/* X chevron icon – expanded state: ∨ on top, ∧ on bottom (pointing inward) */
const CloseIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8,5 12,9 16,5" />
    <polyline points="8,19 12,15 16,19" />
  </svg>
);

const EducationItem = ({ institution, date, details, tags, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ position: 'relative', paddingLeft: '3.5rem', paddingBottom: isLast ? '0' : '3.5rem' }}>
      {/* Timeline Line */}
      {!isLast && (
        <div style={{ 
          position: 'absolute', 
          left: '1.25rem', 
          top: '3rem', 
          bottom: '-0.5rem', 
          width: '1px', 
          backgroundColor: 'rgba(255, 255, 255, 0.1)' 
        }} />
      )}
      
      {/* Timeline Icon */}
      <div style={{ 
        position: 'absolute', left: '0', top: '0.2rem', 
        width: '2.5rem', height: '2.5rem', 
        borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        border: '1px solid var(--border-focus)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2,
        backdropFilter: 'blur(10px)'
      }}>
        <GraduationCap size={16} color="var(--text-primary)" />
      </div>

      {/* Content */}
      <div className="interactive" style={{ pointerEvents: 'auto' }}>
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', userSelect: 'none' }}
        >
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{institution}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.2rem', fontFamily: 'var(--font-mono)' }}>{date}</p>
          </div>
          <motion.div 
            style={{ color: 'var(--text-muted)', padding: '0.2rem', cursor: 'pointer' }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: isExpanded ? 0 : 0 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <CloseIcon size={18} color="var(--text-muted)" />
                </motion.div>
              ) : (
                <motion.div
                  key="diamond"
                  initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <DiamondIcon size={18} color="var(--text-muted)" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <ul style={{ 
                color: 'var(--text-secondary)', 
                paddingLeft: '1.2rem', 
                marginBottom: '1.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.8rem', 
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}>
                {details.map((detail, index) => (
                  <li key={index} style={{ listStyleType: 'disc', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {tags.map((tag, index) => (
            <span key={index} style={{ 
              padding: '0.3rem 0.8rem', 
              backgroundColor: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: 'var(--radius-sm)', 
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)' 
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

import DecryptHeader from './DecryptHeader';
import GlowCard from './GlowCard';
import { staggerContainer, slideUpItem } from '../utils/animations';

const Education = () => {
  const educations = [
    {
      institution: "Manipal Institute of Technology, Bengaluru",
      date: "08.2023 — Present",
      details: [
        "B.Tech in Computer Science (Artificial Intelligence)",
        "GPA: 8.33",
        "Relevant Coursework: Data Structures & Algorithms, OOPS, DBMS, Machine Learning, Artificial Intelligence, Computer Vision, Natural Language Processing"
      ],
      tags: ["Data Structures", "Algorithms", "OOPS", "DBMS", "Machine Learning", "Artificial Intelligence", "Computer Vision", "Natural Language Processing"]
    },
    {
      institution: "Tuli Public School, Nagpur",
      date: "2022",
      details: [
        "Class XII (CBSE), India",
        "Percentage: 89%"
      ],
      tags: ["CBSE", "Class XII", "89%"]
    },
    {
      institution: "Bhavan's B.P Vidya Mandir, Trimurti Nagar, Nagpur",
      date: "2020",
      details: [
        "Class X (CBSE), India",
        "Percentage: 94.2%"
      ],
      tags: ["CBSE", "Class X", "94.2%"]
    }
  ];

  return (
    <section className="section" id="education">
      <div className="container">
        <DecryptHeader text="EDUCATION." delay={0.3} />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={slideUpItem}>
            <div style={{ position: 'relative', backgroundColor: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
              {educations.map((edu, i) => (
                <EducationItem key={i} {...edu} isLast={i === educations.length - 1} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
