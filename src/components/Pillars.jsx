import React from 'react';
import { pillars } from '../data/homeData';

const Pillars = () => {
  return (
    <section className="bg-cream" id="explore">
      <div className="section-header mb-12">
        <h2>Core Pillars</h2>
        <div className="divider"></div>
      </div>
      <div className="pillar-grid">
        {pillars.map((pillar) => (
          <div key={pillar.id} className={`pillar-card ${pillar.bg} ${pillar.border || ''}`}>
            <div className={`pillar-icon ${pillar.textColor || ''}`}>
              {pillar.icon === 'cognitive' && (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/>
                </svg>
              )}
              {pillar.icon === 'vital' && (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              )}
              {pillar.icon === 'immune' && (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              )}
            </div>
            <div>
              <h3 className={pillar.textColor || ''} style={{ whiteSpace: 'pre-line' }}>{pillar.title}</h3>
              <p className={`${pillar.textColor || ''} opacity-80 mt-4`}>{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
