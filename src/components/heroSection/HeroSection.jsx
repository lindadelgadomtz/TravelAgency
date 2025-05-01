import React from 'react';
import './HeroSection.css';

const HeroSection = ({ bgImage }) => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">Bespoke Travel Experiences</h1>
        <p className="hero-subtitle">
          Curated journeys designed with care, intention, and a touch of magic.
        </p>
        <a href="/destinations" className="hero-button">
          Explore Destinations
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
