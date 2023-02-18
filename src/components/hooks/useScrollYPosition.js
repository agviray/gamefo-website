import React, { useState, useEffect } from 'react';

const useScrollYPosition = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  useEffect(() => {
    const updateScrollYPosition = () => {
      let scrollPos = window.scrollY;
      if (typeof window !== 'undefined') {
        setScrollYPosition(scrollPos);
      }
    };

    window.addEventListener('scroll', updateScrollYPosition);

    return () => {
      window.removeEventListener('scroll', updateScrollYPosition);
    };
  }, [scrollYPosition]);

  return scrollYPosition;
};

export default useScrollYPosition;
