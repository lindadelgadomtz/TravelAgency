// src/hooks/useLockBodyScroll.js
import { useEffect } from 'react';

const useLockBodyScroll = (isLocked = true) => {
  useEffect(() => {
    if (isLocked) {
      // Store original styles
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';

      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.height = '';
      };
    }
  }, [isLocked]);
};

export default useLockBodyScroll;
