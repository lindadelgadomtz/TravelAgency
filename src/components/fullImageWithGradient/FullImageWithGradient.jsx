import React from 'react';
import PropTypes from 'prop-types';
import './FullImageWithGradient.css';

const FullImageWithGradient = ({
  src,
  alt,
  className,
  height,
  fadeColor,
  blurAmount,
  overlayHeight,
}) => {
  return (
    <div
      className={`full-image-wrapper ${className}`}
      style={{
        height,
        '--fade-color': fadeColor,
        '--blur-amount': blurAmount,
        '--overlay-height': overlayHeight,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="full-image"
      />
      <div className="image-gradient-overlay" />
    </div>
  );
};

FullImageWithGradient.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  fadeColor: PropTypes.string,     // RGB format, e.g. "0, 0, 0"
  blurAmount: PropTypes.string,    // e.g. "10px"
  overlayHeight: PropTypes.string, // e.g. "30%"
};

FullImageWithGradient.defaultProps = {
  alt: '',
  className: '',
  height: '60vh',
  fadeColor: '255, 255, 255',
  blurAmount: '10px',
  overlayHeight: '30%',
};

export default FullImageWithGradient;
