import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import CommandButton from './CommandButton';
import ScrollIndicator from './ScrollIndicator';
import { staggerContainer, slideUpItem } from '../utils/animations';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          style={{ maxWidth: '800px' }}
        >
          <motion.div variants={slideUpItem}>
            <h1 
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 6rem)', 
                lineHeight: 1.05, 
                letterSpacing: '2px',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              RISHI DWIVEDI.
            </h1>
          </motion.div>
          
          <motion.div
            variants={slideUpItem}
            style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              color: 'var(--text-secondary)',
              height: '2.5rem', // Fixed height to prevent layout shift during typing
              marginBottom: '3rem',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typewriter
              words={[
                'Software Engineer',
                'Thinking in Systems. Creating with code.',
                'Competitive Coder'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </motion.div>
          
          <motion.div
            variants={slideUpItem}
            style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
          >
            <CommandButton text="View Work" href="#projects" />
          </motion.div>

        </motion.div>
        
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
