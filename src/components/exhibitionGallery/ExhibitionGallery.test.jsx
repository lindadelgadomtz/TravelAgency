import React from 'react';
import { render, screen } from '@testing-library/react';
import ExhibitionGallery from './ExhibitionGallery';

const mockItems = [
  {
    imageUrl: '/images/venice-travel-scene.webp',
    alt: 'Venice scene',
    title: 'Venice, Italy',
    description: 'Romantic canals and timeless architecture.',
    author: 'L&V Travels',
  },
  {
    imageUrl: '/images/giants-causeway-northern-ireland.webp',
    alt: 'Giant’s Causeway',
    title: 'Giant’s Causeway',
    description: 'Natural rock formations on the Irish coast.',
    author: 'L&V Travels',
  },
];

describe('ExhibitionGallery', () => {
  it('renders without crashing', () => {
    render(<ExhibitionGallery items={mockItems} />);
    expect(screen.getByText('Venice, Italy')).toBeInTheDocument();
    expect(screen.getByText('Giant’s Causeway')).toBeInTheDocument();
  });

  it('renders images with alt text', () => {
    render(<ExhibitionGallery items={mockItems} />);
    expect(screen.getByAltText('Venice scene')).toBeInTheDocument();
    expect(screen.getByAltText('Giant’s Causeway')).toBeInTheDocument();
  });

  it('displays the author credit', () => {
    render(<ExhibitionGallery items={mockItems} />);
    expect(screen.getAllByText(/Photo by L&V Travels/).length).toBe(2);
  });

  it('renders a button if showButton is true', () => {
    render(<ExhibitionGallery items={mockItems} showButton={true} buttonLabel="Discover" />);
    expect(screen.getAllByRole('link', { name: 'Discover' }).length).toBe(2);
  });

  it('does not render button if showButton is false', () => {
    render(<ExhibitionGallery items={mockItems} showButton={false} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('applies dark mode class when darkMode is true', () => {
    const { container } = render(<ExhibitionGallery items={mockItems} darkMode={true} />);
    expect(container.firstChild).toHaveClass('dark-mode');
  });
});
