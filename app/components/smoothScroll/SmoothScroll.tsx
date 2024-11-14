"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
// import "./SmoothScroll.css";
import useWindowSize from "@/app/hooks/useWindowSize";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    if (scrollingContainerRef.current) {
      setBodyHeight();
    }
  }, [windowSize.height]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
    }
  };

  useEffect(() => {
    smoothScrollingHandler();
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;

    if (scrollingContainerRef.current) {
      gsap.to(data, {
        previous: data.current,
        ease: "power2.out", // Softer easing curve
        duration: 1.2, // Increased duration for extra smoothness
        onUpdate: () => {
          data.rounded = Math.round(data.previous * 100) / 100;
          if (scrollingContainerRef.current) {
            scrollingContainerRef.current.style.transform = `translateY(-${data.rounded}px)`;
          }
        },
      });
    }

    // Continue the animation frame loop
    requestAnimationFrame(smoothScrollingHandler);
  };

  return (
    <div className="parent">
      <div ref={scrollingContainerRef} className="scrolling-container">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
