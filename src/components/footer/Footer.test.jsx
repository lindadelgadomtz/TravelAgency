import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders the logo text', () => {
    render(<Footer />);
    const logoElement = screen.getByText(/L & V Travels/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<Footer />);
    const links = ['About', 'Destinations', 'Services', 'Journal', 'Contact'];
    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it('renders the social media icons (Instagram, Pinterest, Email)', () => {
    render(<Footer />);
    const instagramLink = screen.getByLabelText(/Instagram/i);
    const pinterestLink = screen.getByLabelText(/Pinterest/i);
    const emailLink = screen.getByLabelText(/Email/i);

    expect(instagramLink).toBeInTheDocument();
    expect(pinterestLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });

  it('renders the copyright text with the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Hestia Innovation. All rights reserved.`))
      .toBeInTheDocument();
  });

  it('renders the social media links in new tabs', () => {
    render(<Footer/>);
    const instagramLink = screen.getByLabelText(/Instagram/i);
    const pinterestLink = screen.getByLabelText(/Pinterest/i);

    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(pinterestLink).toHaveAttribute('target', '_blank');

  })

});
