import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders the logo text', () => {
    render(<Header />);
    const logoElement = screen.getByText(/L & V Travels/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<Header />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Destinations/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Journal/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('toggles the mobile menu when hamburger is clicked', () => {
    render(<Header />);
    const hamburger = screen.getByLabelText(/toggle menu/i);
    expect(screen.queryByText(/About/i)).toBeInTheDocument();
    fireEvent.click(hamburger);
    // You can assert that the 'open' class is now applied
    const navLinks = screen.getByRole('navigation');
    expect(navLinks.className).toMatch(/open/);
  });
});
