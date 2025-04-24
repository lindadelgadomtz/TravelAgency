import React from 'react';
import './Footer.css';
import { FaInstagram, FaPinterestP, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="/">L & V Travels</a>
                </div>
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/destinations">Destinations</a>
                    <a href="/services">Services</a>
                    <a href="/journal">Journal</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                        <FaPinterestP />
                    </a>
                    <a href="mailto:info@landvtravels.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
                <div className="footer-copy">
                    <p>© {new Date().getFullYear()} Hestia Innovation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
