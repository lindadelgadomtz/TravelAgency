import { useEffect, useRef, useState } from 'react';

const useInView = (options = { threshold: 0.75 }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // only trigger once
        }
      },
      { threshold: 0.1, ...options }
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [options]);

  return [ref, isInView];
};

export default useInView;
