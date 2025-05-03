import React from 'react';
import PropTypes from 'prop-types';
import './QuoteBlock.css';
import useInView from '../../utils/useInView';

const QuoteBlock = ({
  text,
  author,
  fontSize = '1.8rem',
  fontFamily = `'Playfair Display', serif`,
  maxWidth = '800px',
  decoration = true,
  animationDelay = '0s',
  animationDirection = 'up',
  threshold = 0.2,
  backgroundImage = null,
  variant = 'classic',
  theme = 'light',
}) => {
  const [ref, isInView] = useInView({ threshold });

  return (
    <blockquote
      ref={ref}
      className={`quote-block variant-${variant} theme-${theme} ${
        isInView ? `animate-${animationDirection}` : ''
      }`}
      style={{
        fontSize,
        fontFamily,
        maxWidth,
        '--animation-delay': animationDelay,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      }}
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
  animationDelay: PropTypes.string,
  animationDirection: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  threshold: PropTypes.number,
  backgroundImage: PropTypes.string,
  variant: PropTypes.oneOf(['classic', 'testimonial']),
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default QuoteBlock;
