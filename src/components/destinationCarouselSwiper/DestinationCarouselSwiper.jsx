// DestinationCarouselSwiper.jsx (Swiper version)
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './DestinationCarouselSwiper.css';
import useInView from '../../utils/useInView';

const DestinationCarouselSwiper = ({
  title = 'Our Favorite Escapes',
  subtitle = 'DESTINATIONS',
  destinations = []
}) => {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section
      className={`destination-carousel-section ${inView ? 'fade-in' : 'fade-start'}`}
      ref={ref}
    >
      <div className="destination-carousel-header">
        <span className="carousel-subtitle">{subtitle}</span>
        <h2 className="carousel-title">{title}</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        navigation
        pagination={{ clickable: true }}
        className="carousel-swiper"
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <a
              href={destination.link}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DestinationCarouselSwiper;