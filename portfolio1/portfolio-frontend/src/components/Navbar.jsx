import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Download } from 'lucide-react';

const Navbar = ({ theme, toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['Projects',  'Training', 'Achievements','Skills', 'Certifications', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.2rem 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.background, 
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.border}`,
        transition: 'all 0.3s ease',
        color: theme.text,
        boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.05)'
      }}
    >
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {[
          { icon: <Github size={18} />, url: "https://github.com/BharathReddyBalu" },
          { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/bharathreddy3398" }
        ].map((social, i) => (
          <motion.a 
            key={i}
            href={social.url}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: theme.accent, color: '#fff' }}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: `1px solid ${theme.border}`,
              color: theme.text,
              backgroundColor: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
              cursor: 'pointer'
            }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <div style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
          border: `1px solid ${theme.border}`
      }}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              textDecoration: 'none',
              color: theme.text,
              fontSize: '0.8rem',
              fontWeight: 600,
              padding: '0.6rem 1.2rem',
              borderRadius: '25px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            {item}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.text }}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <motion.a
          href="certificates/BharathCV1.pdf"
          download="Balu_Bharath_Kumar_Reddy_CV.pdf"
          whileHover={{ scale: 1.05 }}
          style={{ 
            padding: '0.8rem 1.8rem', 
            background: theme.accent, 
            color: 'white',
            borderRadius: '50px', 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            border: 'none',
            textDecoration: 'none'
          }}
        >
          Download CV
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
