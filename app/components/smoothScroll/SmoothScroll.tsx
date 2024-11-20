"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface SmoothScrollProps {
  children: ReactNode;
  maxWidth?: string;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  maxWidth = "92rem",
}) => {
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollingContainer = scrollingContainerRef.current;
    let animationFrameId: number;

    // Set the height of the container to match its scroll height
    const setBodyHeight = () => {
      if (scrollingContainer) {
        document.body.style.height = `${scrollingContainer.scrollHeight}px`;
      }
    };

    const updateScrollPosition = () => {
      if (scrollingContainer) {
        gsap.to(scrollingContainer, {
          y: -window.scrollY,
          duration: 1.5,
          ease: "power2.out",
        });
      }
      animationFrameId = requestAnimationFrame(updateScrollPosition);
    };

    // Initialize
    setBodyHeight();
    animationFrameId = requestAnimationFrame(updateScrollPosition);

    // Update height on window resize
    window.addEventListener("resize", setBodyHeight);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setBodyHeight);
    };
  }, []);

  return (
    <div className="parent ">
      <div
        ref={scrollingContainerRef}
        className="scrolling-container fixed inset-0 mx-auto top-0  "
        style={{ maxWidth }}
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
