import React from 'react';

const Consultation = () => {
  return (
    <section className="bg-cream" id="consultation">
      <div className="consultation-box">
        <div className="consultation-content">
          <div className="text-amber mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h2 className="text-white mb-6">Bespoke<br />Protocols</h2>
          <p className="text-palemoss mb-8 opacity-90">
            Schedule a private session with our clinical directors to develop a tailored wellness architecture.
          </p>
          <button className="btn btn-primary bg-amber text-evergreen w-full">Request Appointment</button>
        </div>
        <div className="consultation-image" style={{ backgroundImage: 'url("/consultation.png")' }}></div>
      </div>
    </section>
  );
};

export default Consultation;
