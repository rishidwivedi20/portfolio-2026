import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '800px' }}
        >
          <motion.h1 
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              lineHeight: 1.05, 
              letterSpacing: '-0.04em',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}
          >
            Rishi Dwivedi. <br />
            <span style={{ color: 'var(--text-muted)' }}>Software Engineer.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.6,
              marginBottom: '3rem'
            }}
          >
            B.Tech CSE (AI) student crafting robust full-stack applications. 
            Obsessed with clean code, scalable architecture, and pixel-perfect interfaces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
          >
            <a 
              href="mailto:rishidwi2003@gmail.com" 
              className="interactive"
              style={{
                padding: '1rem 2rem',
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-dark)',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="interactive"
              style={{
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--text-primary)',
                paddingBottom: '0.2rem'
              }}
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
