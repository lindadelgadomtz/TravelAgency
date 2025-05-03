// __mocks__/swiper/react.js

import React from 'react';

export const Swiper = ({ children, ...props }) => (
  <div data-testid="mock-swiper" {...props}>{children}</div>
);

export const SwiperSlide = ({ children, ...props }) => (
  <div data-testid="mock-slide" {...props}>{children}</div>
);
