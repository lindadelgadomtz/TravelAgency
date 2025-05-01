import React from 'react';
import { render, screen } from '@testing-library/react';
import DivOne from './DivOne';

describe('DivOne Component (Dynamic)', () => {
    const props = {
        imageUrl: '/images/sample.webp',
        subheading: 'FEATURED SECTION',
        title: 'Explore the World',
        text: 'We design personalized travel experiences tailored to your vision.',
        buttonLabel: 'Start Planning',
        buttonUrl: '/planning'
    };

    beforeEach(() => {
        render(<DivOne {...props} />);
    });

    it('renders section with aria-labelledby and heading ID', () => {
        const section = screen.getByRole('region');
        expect(section).toHaveAttribute('aria-labelledby', 'divOne-heading');
    });

    it('renders the dynamic subheading', () => {
        expect(screen.getByText(props.subheading)).toBeInTheDocument();
    });

    it('renders the dynamic title', () => {
        expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    });

    it('renders the dynamic text', () => {
        expect(screen.getByText(props.text)).toBeInTheDocument();
    });

    it('renders the button with correct label and link', () => {
        const button = screen.getByRole('link', { name: props.buttonLabel });
        expect(button).toHaveAttribute('href', props.buttonUrl);
    });

    it('renders the image with correct src and alt', () => {
        const img = screen.getByAltText(props.title);
        expect(img).toHaveAttribute('src', props.imageUrl);
    });
});
