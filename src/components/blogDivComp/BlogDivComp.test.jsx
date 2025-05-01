import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogDivComp from './BlogDivComp';
import '@testing-library/jest-dom';

// Mock the useInView hook to always return true for tests
jest.mock('../../utils/useInView', () => () => [jest.fn(), true]);

describe('BlogDivComp Component', () => {
  const mockProps = {
    title: 'Test Blog Title',
    subtitle: 'Test Subtitle',
    description: 'This is a test description for the blog.',
    link: '/journal',
    largeImage: '/images/large.jpg',
    smallImage: '/images/small.jpg',
  };

  beforeEach(() => {
    render(<BlogDivComp {...mockProps} />);
  });

  it('renders the subtitle', () => {
    expect(screen.getByText(/Test Subtitle/i)).toBeInTheDocument();
  });

  it('renders the title', () => {
    expect(screen.getByRole('heading', { name: /Test Blog Title/i })).toBeInTheDocument();
  });

  it('renders the description', () => {
    expect(screen.getByText(/This is a test description/i)).toBeInTheDocument();
  });

  it('renders the button with correct link and label', () => {
    const link = screen.getByRole('link', { name: /Read the blog journal/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/journal');
  });

  it('renders both images with correct alt attributes', () => {
    expect(screen.getByAltText(/Travel story landscape/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Traveler enjoying destination/i)).toBeInTheDocument();
  });

  it('applies animation classes when in view', () => {
    expect(document.querySelector('.blog-text-content')).toHaveClass('slide-up');
    expect(document.querySelector('.blog-image-container')).toHaveClass('fade-in-left');
  });
});
