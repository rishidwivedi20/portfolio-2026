import Terminal from './Terminal';
import { MapPin, Code2, Database, LayoutTemplate, Coffee, Cpu, Layers, BrainCircuit, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import DecryptHeader from './DecryptHeader';

const BentoGrid = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <DecryptHeader text="ABOUT." delay={0.1} />
        
        <div className="bento-grid" style={{ marginBottom: '5rem' }}>
          {/* Terminal takes full width on top */}
          <Terminal />
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
