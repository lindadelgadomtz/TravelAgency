import React from 'react';
import { render, screen } from '@testing-library/react';
import FullImageWithGradient from './FullImageWithGradient';

describe('FullImageWithGradient', () => {
  const defaultProps = {
    src: '/images/test-image.webp',
    alt: 'Test Image',
    height: '50vh',
    fadeColor: '0, 0, 0',
    blurAmount: '8px',
    overlayHeight: '25%',
  };

  it('renders an image with the correct src and alt attributes', () => {
    render(<FullImageWithGradient {...defaultProps} />);
    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', defaultProps.src);
  });

  it('applies the correct custom CSS variables to the wrapper', () => {
    const { container } = render(<FullImageWithGradient {...defaultProps} />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveStyle(`--fade-color: ${defaultProps.fadeColor}`);
    expect(wrapper).toHaveStyle(`--blur-amount: ${defaultProps.blurAmount}`);
    expect(wrapper).toHaveStyle(`--overlay-height: ${defaultProps.overlayHeight}`);
  });

  it('renders the gradient overlay element', () => {
    render(<FullImageWithGradient {...defaultProps} />);
    const overlay = document.querySelector('.image-gradient-overlay');
    expect(overlay).toBeInTheDocument();
  });
});
