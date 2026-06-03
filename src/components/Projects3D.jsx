import { Tilt } from 'react-tilt';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SocialEcho',
    desc: 'Full-stack content publishing platform with AI moderation, JWT auth, and rich text editing.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'Sorting Visualizer',
    desc: 'Interactive application visualizing sorting algorithms in real-time with adjustable parameters.',
    tech: ['React', 'Algorithms', 'CSS'],
    github: '#',
    live: '#'
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Modern storefront with Stripe integration, cart management, and admin dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#'
  },
  {
    title: 'Real-Time Chat',
    desc: 'Scalable messaging app supporting group chats, file sharing, and live typing indicators.',
    tech: ['Socket.io', 'Redis', 'React'],
    github: '#',
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
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-primary)' }}>Selected Works.</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, i) => (
            <Tilt key={i} options={defaultOptions} className="interactive">
              <div 
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-focus)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)' }}>0{i + 1}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.github} style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
                    <a href={project.live} style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                  </div>
                </div>
                
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flex: 1, marginBottom: '2rem' }}>{project.desc}</p>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {project.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects3D;
