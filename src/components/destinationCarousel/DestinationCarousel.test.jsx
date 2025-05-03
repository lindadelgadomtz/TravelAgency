import React from 'react';
import { render, screen } from '@testing-library/react';
import DestinationCarousel from './DestinationCarousel';
import '@testing-library/jest-dom';

// 🧪 Mock the useInView hook to simulate that component is visible
jest.mock('../../utils/useInView', () => () => {
  const ref = { current: null };
  return [ref, true]; // `inView` is true
});

const mockDestinations = [
  {
    name: 'Morocco',
    description: 'Desert magic and ancient souks.',
    imageUrl: '/images/morocco-destination.webp',
    link: '/destinations/morocco',
  },
  {
    name: 'Venice',
    description: 'Timeless charm over water.',
    imageUrl: '/images/venice-travel-scene.webp',
    link: '/destinations/venice',
  },
];

describe('DestinationCarousel', () => {
  it('renders the title and subtitle', () => {
    render(<DestinationCarousel destinations={mockDestinations} />);
    expect(screen.getByText(/Our Favorite Escapes/i)).toBeInTheDocument();
    expect(screen.getByText(/DESTINATIONS/i)).toBeInTheDocument();
  });

  it('renders destination cards with correct content', () => {
    render(<DestinationCarousel destinations={mockDestinations} />);
    expect(screen.getByText('Morocco')).toBeInTheDocument();
    expect(screen.getByText('Venice')).toBeInTheDocument();
    expect(screen.getByText('Desert magic and ancient souks.')).toBeInTheDocument();
    expect(screen.getByText('Timeless charm over water.')).toBeInTheDocument();
  });

  it('uses correct alt text for images (SEO)', () => {
    render(<DestinationCarousel destinations={mockDestinations} />);
    expect(screen.getByAltText('Morocco')).toBeInTheDocument();
    expect(screen.getByAltText('Venice')).toBeInTheDocument();
  });

  it('has animation class when in view', () => {
    render(<DestinationCarousel destinations={mockDestinations} />);
    const section = screen.getByRole('region', { hidden: true }) || screen.getByText(/Our Favorite Escapes/i).closest('section');
    expect(section).toHaveClass('fade-in');
  });
});
