import React from 'react';

const Manifesto = () => {
  return (
    <section className="bg-palemoss text-center">
      <div className="manifesto-icon mb-8">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" />
        </svg>
      </div>
      <h2 className="manifesto-text mb-8">
        "True wellness is not accidental. It is the result of deliberate, clinical intervention."
      </h2>
      <a href="#" className="manifesto-link">
        Read Our Manifesto
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </section>
  );
};

export default Manifesto;
