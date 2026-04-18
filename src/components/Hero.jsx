import React from 'react';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-overlay" style={{ backgroundImage: 'url("/hero.png")' }}></div>
      <div className="hero-content">
        <span className="text-amber tracking-widest text-xs uppercase font-medium mb-4 block">The Clinical Standard</span>
        <h1 className="mb-8">Uncompromising<br />Wellness</h1>
        <p className="hero-description mb-12">
          Formulated with precision. Designed for longevity. Experience the intersection of medical science and editorial elegance.
        </p>
        <div className="hero-btns">
          <a href="#explore" className="btn btn-cream">Explore Clinicals</a>
          <a href="#consultation" className="btn btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Book Consultation</a>
        </div>
      </div>
      <div className="hero-footer">
        <div className="hero-footer-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/>
          </svg>
          <span>Clinically Proven</span>
        </div>
        <div className="hero-footer-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M12 3v18"/>
          </svg>
          <span>Lab Tested</span>
        </div>
        <div className="hero-footer-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7Z"/>
          </svg>
          <span>Organic Origins</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
