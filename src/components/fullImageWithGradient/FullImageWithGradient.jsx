'use client';

import React from 'react';

const FullImageWithGradient = ({
  src,
  alt = '',
  className = '',
  height = '60vh',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        sizes="100vw"
        style={{ display: 'block' }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 100%)',
          backdropFilter: 'blur(12px)',
        }}
      />
    </div>
  );
};

export default FullImageWithGradient;
