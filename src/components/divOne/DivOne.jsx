import React from 'react';
import './DivOne.css';

const DivOne = ({
    imageUrl,
    subheading,
    title,
    text,
    buttonLabel,
    buttonUrl
}) => {
    return (
        <section className="div-one" aria-labelledby="divOne-heading">
            <div className="div-one-container">
                <div className="div-one-image">
                    <img
                        src={imageUrl}
                        alt={title}
                        loading="lazy"
                        width="600"
                        height="400"
                    />
                </div>
                <div className="div-one-content">
                    <p className="div-one-subheading">{subheading}</p>
                    <h2 id="divOne-heading" className="div-one-title">{title}</h2>
                    <p className="div-one-text">{text}</p>
                    <a href={buttonUrl} className="div-one-button">{buttonLabel}</a>
                </div>
            </div>
        </section>
    );
};

export default DivOne;
