import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-evergreen text-cream">
      <div className="footer-logo">DANES</div>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy <span>+</span></Link>
        <Link to="/terms">Terms of Service <span>+</span></Link>
        <Link to="/standards">Clinical Standards <span>+</span></Link>
        <Link to="/accessibility">Accessibility <span>+</span></Link>
        <Link to="/wholesale">Wholesale <span>+</span></Link>
      </div>
      <div className="footer-bottom">
        © 2024 DANES CLINICAL WELLNESS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
