import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Achievements = ({ theme, achievements }) => {
  if (!achievements) return null;

  return (
    <section id="achievements" className="snap-section" style={{ minHeight: '80vh', padding: '5rem 10% 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>Achievements</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent }} />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {achievements.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              alignItems: 'center',
              padding: '1.5rem 2rem',
              background: theme.cardBackground,
              border: `1px solid ${theme.border}`,
              borderRadius: '16px',
              minHeight: '130px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ 
                fontSize: '1.8rem', 
                color: theme.accent, 
                fontWeight: 900, 
                opacity: 0.15, 
                minWidth: '40px',
                textAlign: 'center'
            }}>
                {(idx + 1).toString().padStart(2, '0')}
            </div>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem', 
                width: '100%',
                justifyContent: 'flex-start'
            }}>
              {item.image ? (
                <div style={{ 
                  width: '65px', 
                  height: '65px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  padding: '5px'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              ) : (
                <div style={{ color: theme.accent, width: '65px', display: 'flex', justifyContent: 'center' }}>
                  <Trophy size={32} strokeWidth={2.5} />
                </div>
              )}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: theme.text, letterSpacing: '0.01em', lineHeight: '1.3' }}>{item.title}</h3>
                <p style={{ fontSize: '0.75rem', color: theme.accent, marginTop: '4px', opacity: 0.8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
