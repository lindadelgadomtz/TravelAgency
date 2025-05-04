describe.skip('QuoteBlock', () => {
    const sampleQuote = "Life is short and the world is wide.";
    const sampleAuthor = "Unknown Traveler";
  
    it('renders quote text', () => {
      render(<QuoteBlock text={sampleQuote} />);
      expect(screen.getByText(sampleQuote)).toBeInTheDocument();
    });
  
    it('renders author when provided', () => {
      render(<QuoteBlock text={sampleQuote} author={sampleAuthor} />);
      expect(screen.getByText(`— ${sampleAuthor}`)).toBeInTheDocument();
    });
  
    it('does not render author if not provided', () => {
      render(<QuoteBlock text={sampleQuote} />);
      expect(screen.queryByText(/^—/)).not.toBeInTheDocument();
    });
  
    it('renders decorative quote mark by default', () => {
      render(<QuoteBlock text={sampleQuote} />);
      expect(screen.getByText('❝')).toBeInTheDocument();
    });
  
    it('does not render decorative quote mark if decoration is false', () => {
      render(<QuoteBlock text={sampleQuote} decoration={false} />);
      expect(screen.queryByText('❝')).not.toBeInTheDocument();
    });
  });
  