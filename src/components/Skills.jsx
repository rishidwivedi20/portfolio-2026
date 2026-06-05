import React from 'react';
import { motion } from 'framer-motion';
import DecryptHeader from './DecryptHeader';
import { staggerContainer, slideUpItem } from '../utils/animations';

const skillsData = [
  {
    category: "Languages",
    skills: ["Java", "C++", "Python", "TypeScript", "JavaScript", "SQL"]
  },
  {
    category: "Web Development",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    category: "Frameworks / Libraries",
    skills: ["Prisma", "NextAuth", "Zustand", "Three.js", "Hugging Face", "OpenAI API", "Google Gemini API"]
  }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <DecryptHeader text="TECHNICAL SKILLS." delay={0.2} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillsData.map((block, idx) => (
            <motion.div
              key={idx}
              variants={slideUpItem}
              whileHover={{ 
                y: -2, 
                borderColor: 'var(--accent-primary)',
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              style={{
                backgroundColor: 'var(--bg-card)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease',
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--accent-primary)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                [ {block.category} ]
              </h3>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
                {block.skills.map((skill, sIdx) => (
                  <li key={sIdx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    fontWeight: 500
                  }}>
                    <span style={{ 
                      color: 'var(--text-muted)', 
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem'
                    }}>
                      &gt;
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
