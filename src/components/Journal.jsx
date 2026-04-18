import React from 'react';
import { journalEntries } from '../data/homeData';

const Journal = () => {
  return (
    <section className="bg-cream">
      <div className="flex-between mb-12">
        <div>
          <h2>The Journal</h2>
          <p className="text-evergreen opacity-60">Insights from our clinical research.</p>
        </div>
        <a href="#" className="view-all">Explore All</a>
      </div>
      <div className="journal-grid">
        {journalEntries.map((entry) => (
          <div key={entry.id} className="journal-card group">
            <div className="journal-image-wrapper">
              <img src={entry.image} alt={entry.title} className="journal-image" />
              <div className="journal-category">{entry.category}</div>
            </div>
            <div className="journal-info">
              <span className="journal-date">{entry.date}</span>
              <h3 className="journal-title mt-2 group-hover:text-amber transition-colors">{entry.title}</h3>
              <a href="#" className="journal-link mt-4 inline-block">Read Article <span>→</span></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journal;
