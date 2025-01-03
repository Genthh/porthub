import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ExpandingCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    const addHoverEffect = () => {
      if (isHoveringRef.current) return;
      isHoveringRef.current = true;

      gsap.to(cursor, {
        scale: 3,
        backgroundColor: "rgba(85, 85, 85, 0.4)",
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const removeHoverEffect = () => {
      if (!isHoveringRef.current) return;
      isHoveringRef.current = false;

      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList?.contains("hover-effect")) {
        addHoverEffect();
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList?.contains("hover-effect")) {
        removeHoverEffect();
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: "10px",
        width: "16px",
        height: "16px",
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 1000,
        transform: "translate(-50%, -50%)",
      }}
      className="hidden md:block"
    />
  );
};

export default ExpandingCursor;
