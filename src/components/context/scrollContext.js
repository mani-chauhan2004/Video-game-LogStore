// src/ScrollContext.js
import React, { createContext, useContext, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      scrollInstance.current.update();

      return () => {
        if (scrollInstance.current) {
          scrollInstance.current.destroy();
        }
      };
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollRef, scrollInstance }}>
      <div data-scroll-container ref={scrollRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
