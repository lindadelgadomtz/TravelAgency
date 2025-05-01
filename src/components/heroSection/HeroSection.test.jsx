import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import '@testing-library/jest-dom';

describe('HeroSection Component', () => {
  it('renders the main title', () => {
    render(<HeroSection />);
    const titleElement = screen.getByText(/Bespoke Travel Experiences/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle text', () => {
    render(<HeroSection />);
    const subtitleElement = screen.getByText(/Curated journeys designed with care/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders the explore button with correct link', () => {
    render(<HeroSection />);
    const buttonElement = screen.getByRole('link', { name: /Explore Destinations/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', '/destinations');
  });
});

describe('HeroSection Component', () => {
    const testImage = '/images/heroSection.jpg';
  
    it('renders the background image from the bgImage prop', () => {
      const { container } = render(<HeroSection bgImage={testImage} />);
      const sectionElement = container.querySelector('.hero-section');
  
      expect(sectionElement).toHaveStyle(`background-image: url(${testImage})`);
    });
  
    it('renders the title and subtitle text correctly', () => {
      const { getByText } = render(<HeroSection bgImage={testImage} />);
      expect(getByText(/Bespoke Travel Experiences/i)).toBeInTheDocument();
      expect(getByText(/Curated journeys designed with care/i)).toBeInTheDocument();
    });
  
    it('renders the Explore Destinations button with the correct link', () => {
      const { getByRole } = render(<HeroSection bgImage={testImage} />);
      const buttonElement = getByRole('link', { name: /Explore Destinations/i });
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveAttribute('href', '/destinations');
    });
  });
  
