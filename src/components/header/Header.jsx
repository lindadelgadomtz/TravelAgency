import React, { useState } from 'react';
import './Header.css';

const Header = ({ transparent = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${transparent ? 'transparent' : 'solid'}`}>
      <div className="header-container">
        <div className="logo">
          <a href="/">L & V Travels</a>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/destinations" onClick={closeMenu}>Destinations</a>
          <a href="/services" onClick={closeMenu}>Services</a>
          <a href="/journal" onClick={closeMenu}>Journal</a>
          <a href="/contact" className="contact-btn" onClick={closeMenu}>Contact</a>
        </nav>
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
