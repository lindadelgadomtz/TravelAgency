import React from 'react';
import './FeatureBlock.css';
import useInView from '../../utils/useInView';

const FeatureBlock = ({
  title,
  text,
  imageUrl,
  imageAlt = '',
  imageCaption = '',
  bgColor = '#f0f0f0',
  backgroundWidth = '75%',
  backgroundHeight = '70%',
  roundedBackground = true,
  imageWidth = '50%',
  imageHeight = 'auto',
  titleFont = "'Playfair Display', serif",
  textFont = "'Lato', sans-serif",
  captionFont = "'Lora', serif",
  captionBackground = false,
  showButton = false,
  buttonLabel = 'Learn More',
  buttonUrl = '#',
  roundedImage = false,
  animation = 'fade-in',
  animationDelay = '0s',
  darkMode = false
}) => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`feature-block ${isInView ? animation : ''} ${darkMode ? 'dark-mode' : ''}`}
      style={{ transitionDelay: isInView ? animationDelay : '0s', '--background-height': backgroundHeight }}
    >
      <div
        className="feature-block-background"
        style={{
          backgroundColor: bgColor,
          width: backgroundWidth,
          height: backgroundHeight,
          borderRadius: roundedBackground ? '20px' : '0',
          left: '6rem',
          transform: 'translateY(-50%)'
        }}
      />

      <div className="feature-content">
        <div className="feature-text" style={{ fontFamily: textFont }}>
          <h2 className="feature-title" style={{ fontFamily: titleFont }}>{title}</h2>
          <p>{text}</p>
          {showButton && (
            <a href={buttonUrl} className="feature-button" aria-label={buttonLabel}>
              {buttonLabel}
            </a>
          )}
        </div>

        <div
          className="feature-image-wrapper"
          style={{ width: imageWidth, height: imageHeight }}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className={`feature-image ${roundedImage ? 'rounded' : ''}`}
            style={{ width: '100%', height: '100%' }}
          />
          {imageCaption && (
            <div
              className={`image-caption ${captionBackground ? 'with-bg' : ''}`}
              style={{ fontFamily: captionFont }}
            >
              {imageCaption}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;






// import React from 'react';
// import './FeatureBlock.css';
// import useInView from '../../utils/useInView';

// const FeatureBlock = ({
//   title,
//   text,
//   imageUrl,
//   imageAlt = '',
//   imageCaption = '',
//   bgColor = '#f0f0f0',
//   backgroundWidth = '75%',
//   backgroundHeight = '70%',
//   roundedBackground = true,
//   imageWidth = '50%',
//   imageHeight = 'auto',
//   titleFont = "'Playfair Display', serif",
//   textFont = "'Lato', sans-serif",
//   captionFont = "'Lora', serif",
//   captionBackground = false,
//   showButton = false,
//   buttonLabel = 'Learn More',
//   buttonUrl = '#',
//   roundedImage = false,
//   animation = 'fade-in',
//   animationDelay = '0s',
//   imagePosition = 'right',
//   darkMode = false
// }) => {
//   const [ref, isInView] = useInView();

//   return (
//     <section
//       ref={ref}
//       className={`feature-block ${isInView ? animation : ''} ${darkMode ? 'dark-mode' : ''}`}
//       style={{ transitionDelay: isInView ? animationDelay : '0s', '--background-height': backgroundHeight }}
//     >
//       <div
//         className="feature-block-background"
//         style={{
//           backgroundColor: bgColor,
//           width: backgroundWidth,
//           height: backgroundHeight,
//           borderRadius: roundedBackground ? '20px' : '0',
//           left: '6rem',
//           transform: 'translateY(-50%)'
//         }}
//       />

//       <div className={`feature-content ${imagePosition === 'left' ? 'reverse-layout' : ''}`}>
//         <div className="feature-text" style={{ fontFamily: textFont }}>
//           <h2 className="feature-title" style={{ fontFamily: titleFont }}>{title}</h2>
//           <p>{text}</p>
//           {showButton && (
//             <a href={buttonUrl} className="feature-button" aria-label={buttonLabel}>
//               {buttonLabel}
//             </a>
//           )}
//         </div>

//         <div
//           className="feature-image-wrapper"
//           style={{ width: imageWidth, height: imageHeight }}
//         >
//           <img
//             src={imageUrl}
//             alt={imageAlt}
//             className={`feature-image ${roundedImage ? 'rounded' : ''}`}
//             style={{ width: '100%', height: '100%' }}
//           />
//           {imageCaption && (
//             <div
//               className={`image-caption ${captionBackground ? 'with-bg' : ''}`}
//               style={{ fontFamily: captionFont }}
//             >
//               {imageCaption}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureBlock;






{/* <section
ref={ref}
className={`feature-block ${isInView ? animation : ''} ${darkMode ? 'dark-mode' : ''}`}
style={{ transitionDelay: isInView ? animationDelay : '0s', '--background-height': backgroundHeight }}
>
<div
  className="feature-block-background"
  style={{
    backgroundColor: bgColor,
    width: backgroundWidth,
    height: backgroundHeight,
    borderRadius: roundedBackground ? '20px' : '0',
    left: '6rem',
    transform: 'translateY(-50%)'
  }}
/>

<div className={`feature-content ${imagePosition === 'left' ? 'reverse-layout' : ''}`}>
  <div className="feature-text" style={{ fontFamily: textFont }}>
    <h2 className="feature-title" style={{ fontFamily: titleFont }}>{title}</h2>
    <p>{text}</p>
    {showButton && (
      <a href={buttonUrl} className="feature-button" aria-label={buttonLabel}>
        {buttonLabel}
      </a>
    )}
  </div>

  <div
    className="feature-image-wrapper"
    style={{ width: imageWidth, height: imageHeight }}
  >
    <img
      src={imageUrl}
      alt={imageAlt}
      className={`feature-image ${roundedImage ? 'rounded' : ''}`}
      style={{ width: '100%', height: '100%' }}
    />
    {imageCaption && (
      <div
        className={`image-caption ${captionBackground ? 'with-bg' : ''}`}
        style={{ fontFamily: captionFont }}
      >
        {imageCaption}
      </div>
    )}
  </div>
</div>
</section> */}