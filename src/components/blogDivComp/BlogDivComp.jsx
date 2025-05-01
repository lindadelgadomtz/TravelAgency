import React from 'react';
import './BlogDivComp.css';
import useInView from '../../utils/useInView';

const BlogDivComp = ({
  title,
  subtitle,
  description,
  link,
  largeImage,
  smallImage
}) => {
  const [textRef, textInView] = useInView({ threshold: 0.2 });
  const [imageRef, imageInView] = useInView({ threshold: 0.2 });

  return (
    <section className="blog-div">
      <div
        className={`blog-text-content ${textInView ? 'slide-up' : ''}`}
        ref={textRef}
      >
        <span className="blog-subtitle">{subtitle}</span>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
        <a href={link} className="blog-button" aria-label="Read the blog journal">
          Read the Journal
        </a>
      </div>
      <div
        className={`blog-image-container ${imageInView ? 'fade-in-left' : ''}`}
        ref={imageRef}
      >
      <div className="blog-image-container">
        <div className="image-wrapper">
          <img
            src={largeImage}
            alt="Travel story landscape"
            className="blog-main-image"
            loading="lazy"
          />
          <img
            src={smallImage}
            alt="Traveler enjoying destination"
            className="blog-overlay-image"
            loading="lazy"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default BlogDivComp;
