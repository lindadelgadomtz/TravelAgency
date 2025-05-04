import React from 'react';
import './ExhibitionGallery.css';
import useInView from '../../utils/useInView';

const ExhibitionGallery = ({
  items = [],
  bgColor = '#f8f8f8',
  fontFamily = "'Lato', sans-serif",
  titleFont = "'Playfair Display', serif",
  roundedImages = true,
  showButton = false,
  buttonLabel = 'Explore',
  buttonUrl = '#',
  animation = 'fade-in',
  animationDelay = '0s',
  darkMode = false,
}) => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`exhibition-showcase ${isInView ? animation : ''} ${darkMode ? 'dark-mode' : ''}`}
      style={{ backgroundColor: bgColor, transitionDelay: isInView ? animationDelay : '0s', fontFamily }}
    >
      <div className="exhibition-grid">
        {items.map((item, index) => (
          <div className="exhibition-card" key={index}>
            <div className={`exhibition-frame ${roundedImages ? 'rounded' : ''}`}>
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="exhibition-image"
                loading="lazy"
              />
            </div>
            <h3 className="exhibition-title" style={{ fontFamily: titleFont }}>{item.title}</h3>
            <p className="exhibition-description">{item.description}</p>
            <p className="exhibition-author">Photo by {item.author}</p>
            {showButton && (
              <a href={buttonUrl} className="exhibition-button" aria-label={buttonLabel}>
                {buttonLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExhibitionGallery;
