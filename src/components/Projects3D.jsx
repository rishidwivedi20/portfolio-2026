import { Tilt } from 'react-tilt';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import DecryptHeader from './DecryptHeader';
import GlowCard from './GlowCard';
import { staggerContainer, slideUpItem } from '../utils/animations';

const GithubIcon = ({ size = 24, color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.3 0 0-1.2-.4-3.4 1.2-.4-.2-1.3-.3-2-.3s-1.6.1-2 .3C6.3 2.5 5.1 2.9 5.1 2.9c-.7 1.7-.2 3-.1 3.3-1 .9-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-1.2.5-1.5 1.7-1.5 3.2v4"/>
  </svg>
);

const projects = [
  {
    title: 'SocialEcho',
    desc: 'Full-stack content publishing platform with AI moderation, JWT auth, and rich text editing.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/rishidwivedi20',
    live: '#'
  },
  {
    title: 'Sorting Visualizer',
    desc: 'Interactive application visualizing sorting algorithms in real-time with adjustable parameters.',
    tech: ['React', 'Algorithms', 'CSS'],
    github: 'https://github.com/rishidwivedi20/The-Sort-Lab',
    live: 'https://the-sort-lab-mauve.vercel.app/'
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Modern storefront with Stripe integration, cart management, and admin dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/rishidwivedi20',
    live: '#'
  },
  {
    title: 'Real-Time Chat',
    desc: 'Scalable messaging app supporting group chats, file sharing, and live typing indicators.',
    tech: ['Socket.io', 'Redis', 'React'],
    github: 'https://github.com/rishidwivedi20',
    live: '#'
  }
];

const defaultOptions = {
  reverse:        false,  
  max:            15,     
  perspective:    1000,   
  scale:          1.02,    
  speed:          1000,   
  transition:     true,   
  axis:           null,   
  reset:          true,    
  easing:         "cubic-bezier(.03,.98,.52,.99)",
}

const Projects3D = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <DecryptHeader text="PROJECTS." delay={0.2} />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={slideUpItem}>
              <Tilt options={defaultOptions} className="interactive" style={{ height: '100%' }}>
                <GlowCard>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)' }}>0{i + 1}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, color: '#ffffff' }}
                        transition={{ duration: 0.2 }}
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <GithubIcon size={20} />
                      </motion.a>
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, color: '#ffffff' }}
                        transition={{ duration: 0.2 }}
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flex: 1, marginBottom: '2rem' }}>{project.desc}</p>
                  
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {project.tech.map((t, j) => (
                      <span key={j}>{t}</span>
                    ))}
                  </div>
                </GlowCard>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects3D;
