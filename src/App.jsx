import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Education from './components/Education';
import Projects3D from './components/Projects3D';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import TelemetryHUD from './components/TelemetryHUD';
import SocialDock from './components/SocialDock';
import ThemeSwitcher from './components/ThemeSwitcher';

import { heroAnimation } from './utils/animations';

const FadeInSection = ({ children, delay = 0 }) => {
  // We can customize the variant's delay dynamically
  const variant = {
    hidden: heroAnimation.hidden,
    show: {
      ...heroAnimation.show,
      transition: {
        ...heroAnimation.show.transition,
        delay: delay
      }
    }
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [themeColor, setThemeColor] = useState('#10b981'); // Defaulting to green

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-primary', themeColor);
  }, [themeColor]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ThemeSwitcher currentThemeColor={themeColor} setThemeColor={setThemeColor} />
      <BackgroundCanvas themeColor={themeColor} />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <TelemetryHUD themeColor={themeColor} />
            <SocialDock />
            <Navigation scrolled={scrolled} />

            <main>
              <Hero />
              
              <FadeInSection>
                <BentoGrid />
              </FadeInSection>
              
              <FadeInSection>
                <Projects3D />
              </FadeInSection>
              
              <FadeInSection>
                <CodingProfiles />
              </FadeInSection>
              
              <FadeInSection>
                <Education />
              </FadeInSection>
              
              <FadeInSection>
                <Skills />
              </FadeInSection>
              
              <FadeInSection>
                <Footer />
              </FadeInSection>
            </main>
            

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
