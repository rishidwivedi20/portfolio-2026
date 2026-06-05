import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Medal, Star, Target } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import DecryptHeader from './DecryptHeader';
import GlowCard from './GlowCard';
import { staggerContainer, slideUpItem } from '../utils/animations';

const achievements = [
  {
    icon: <Trophy size={24} color="var(--accent-tertiary)" />,
    title: "LeetCode Knight",
    desc: "Knight badge holder; ranked in the top 5.21% globally."
  },
  {
    icon: <Target size={24} color="var(--accent-primary)" />,
    title: "500+ DSA Solved",
    desc: "Solved 500+ Data Structures and Algorithms problems across platforms."
  },
  {
    icon: <Medal size={24} color="var(--accent-secondary)" />,
    title: "Global Rank 527",
    desc: "Achieved highest LeetCode contest rank of 527 globally."
  },
  {
    icon: <Star size={24} color="var(--accent-tertiary)" />,
    title: "5-Star HackerRank",
    desc: "Achieved 5-star in Problem Solving and 4-star in Java."
  },
  {
    icon: <Code size={24} color="var(--text-primary)" />,
    title: "Top 10 Hackathon",
    desc: "Secured a Top 10 position in Honeywell Hackathon among 200+ teams."
  }
];

const profiles = [
  { name: 'LeetCode', url: 'https://leetcode.com/u/rbkd/', icon: SiLeetcode },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/rishidwi2003', icon: SiHackerrank },
  { name: 'GitHub', url: 'https://github.com/rishidwivedi20', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rishi-dwivedi-96971a251/', icon: FaLinkedin }
];

const CodingProfiles = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <DecryptHeader text="ACHIEVEMENTS." delay={0.1} />
        
        {/* Achievements Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}
        >
          {achievements.map((item, index) => (
            <motion.div key={index} variants={slideUpItem} whileHover={{ y: -2, transition: { type: 'spring', stiffness: 400, damping: 25 } }}>
              <GlowCard className="interactive">
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.2rem',
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid var(--border-focus)'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Links */}
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Profiles</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlowCard padding="0" borderRadius="2rem">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '1rem 1.5rem',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                    }}
                  >
                    <Icon size={20} />
                    {profile.name}
                  </a>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
