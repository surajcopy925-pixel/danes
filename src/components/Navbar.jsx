import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleHeroComplete = () => {
      setIsVisible(true);
    };
    window.addEventListener('heroComplete', handleHeroComplete);
    return () => window.removeEventListener('heroComplete', handleHeroComplete);
  }, []);

  return (
    <nav 
      className={`nav ${isScrolled ? 'scrolled' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'all' : 'none',
        transition: 'opacity 0.6s ease'
      }}
    >
      <div className="nav-container">
        <button className="nav-icon" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 12H21M3 6H21M3 18H21" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <Link to="/" className="logo">DANES</Link>
        <div className="nav-actions">
          <button className="nav-icon" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button className="nav-icon" aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
