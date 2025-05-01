import React from 'react';
import './DestinationCarousel.css';
import useInView from '../../utils/useInView';

const DestinationCarousel = ({
  title = "Our Favorite Escapes",
  subtitle = "DESTINATIONS",
  destinations = []
}) => {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section className={`destination-carousel-section ${inView ? 'fade-in' : 'fade-start'}`} ref={ref}>
      <div className="destination-carousel-header">
        <span className="carousel-subtitle">{subtitle}</span>
        <h2 className="carousel-title">{title}</h2>
      </div>
      <div className="carousel-grid">
        {destinations.map((destination, index) => (
          <a
            href={destination.link}
            key={index}
            className="carousel-card"
            aria-label={`Explore ${destination.name}`}
          >
            <img
              src={destination.imageUrl}
              alt={destination.name}
              loading="lazy"
            />
            <div className="carousel-card-overlay">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DestinationCarousel;
