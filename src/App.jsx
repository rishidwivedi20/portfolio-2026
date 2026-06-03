import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Projects3D from './components/Projects3D';

function App() {
  return (
    <>
      <CustomCursor />
      
      {/* Refined Navigation */}
      <nav style={{ padding: '2rem 0', position: 'absolute', width: '100%', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, letterSpacing: '-0.05em', fontSize: '1.2rem' }}>RD.</div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <a href="#about" className="interactive" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>About</a>
            <a href="#projects" className="interactive" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Work</a>
            <a href="mailto:rishidwi2003@gmail.com" className="interactive" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <BentoGrid />
        <Projects3D />
      </main>
      
      {/* Minimal Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Rishi Dwivedi. Crafted with minimal elegance.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
