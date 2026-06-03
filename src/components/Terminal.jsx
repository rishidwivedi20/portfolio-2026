import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to RishiOS v1.0.0.' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const commands = {
    help: 'Available commands: whoami, skills, experience, education, clear',
    whoami: 'Rishi Dwivedi - Software Engineer & Computer Science Student at MIT Bengaluru.',
    skills: 'Frontend: React, Next.js, Tailwind\nBackend: Node.js, Express, Java, Spring Boot\nDatabases: PostgreSQL, MongoDB\nTools: Git, Docker, AWS',
    experience: 'SDE Intern @ Tech Company (Jun 2024 - Aug 2024)\n- Built full-stack apps (React/Node.js/PostgreSQL)\n- Optimized queries reducing latency by 40%',
    education: 'B.Tech in CSE (AI) @ Manipal Institute of Technology, Bengaluru (2021-2025)\n- 500+ DSA problems solved on LeetCode.',
    clear: () => setHistory([])
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', text: `guest@rishi:~$ ${input}` }];
      
      if (commands[cmd]) {
        if (typeof commands[cmd] === 'function') {
          commands[cmd]();
          setInput('');
          return;
        } else {
          newHistory.push({ type: 'output', text: commands[cmd] });
        }
      } else if (cmd !== '') {
        newHistory.push({ type: 'error', text: `command not found: ${cmd}` });
      }
      
      setHistory(newHistory);
      setInput('');
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  return (
    <div 
      className="bento-item interactive"
      style={{ gridColumn: 'span 12', minHeight: '350px', display: 'flex', flexDirection: 'column', backgroundColor: '#111213', border: '1px solid #27272a' }}
      onClick={() => inputRef.current?.focus()}
    >
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', borderBottom: '1px solid #27272a', paddingBottom: '1rem', margin: '-2rem -2rem 1.5rem -2rem', padding: '1rem 2rem' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
      </div>
      
      <div style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {history.map((entry, i) => (
          <div key={i} style={{ color: entry.type === 'error' ? 'var(--accent-primary)' : entry.type === 'input' ? 'var(--accent-tertiary)' : 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>
            {entry.text}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          <span style={{ color: 'var(--accent-tertiary)' }}>guest@rishi:~$</span>
          <input 
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              outline: 'none', 
              color: 'var(--text-primary)', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.85rem',
              flex: 1
            }}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
