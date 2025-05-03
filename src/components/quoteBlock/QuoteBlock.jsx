import React from 'react';
import PropTypes from 'prop-types';
import './QuoteBlock.css';

const QuoteBlock = ({
  text,
  author,
  fontSize = '1.8rem',
  fontFamily = `'Playfair Display', serif`,
  maxWidth = '800px',
  decoration = true,
}) => {
  return (
    <blockquote
      className="quote-block"
      style={{ fontSize, fontFamily, maxWidth }}
    >
      {decoration && <div className="quote-mark">❝</div>}
      <p className="quote-text">{text}</p>
      {author && <footer className="quote-author">— {author}</footer>}
    </blockquote>
  );
};

QuoteBlock.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  maxWidth: PropTypes.string,
  decoration: PropTypes.bool,
};

export default QuoteBlock;
