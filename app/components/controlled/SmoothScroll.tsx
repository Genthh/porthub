import React, { ReactNode, useEffect, useRef } from "react";
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

    const setBodyHeight = () => {
      if (scrollingContainer) {
        document.body.style.height = `${scrollingContainer.scrollHeight}px`;
      }
    };

    const getDuration = () => (window.innerWidth < 768 ? 5 : 1.8); // Faster animation on smaller screens

    const updateScrollPosition = () => {
      gsap.to(scrollingContainer, {
        y: -window.scrollY,
        duration: getDuration(),
        ease: "power2.out",
      });
      animationFrameId = requestAnimationFrame(updateScrollPosition);
    };

    setBodyHeight();
    animationFrameId = requestAnimationFrame(updateScrollPosition);

    window.addEventListener("resize", setBodyHeight);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setBodyHeight);
    };
  }, []);

  return (
    <div className="parent">
      <div
        ref={scrollingContainerRef}
        className="scrolling-container fixed inset-0 mx-auto top-0 mb-20"
        style={{ maxWidth }}
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
