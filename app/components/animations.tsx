import gsap from "gsap";
import { useLoadingStore } from "../store/loadingStore";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
type AnimationTarget = gsap.TweenTarget;
type AnimationOptions = {
  initial?: gsap.TweenVars;
  animation?: gsap.TweenVars;
  scrollTrigger?: any;
};
export const slideInFromBottom = (
  target: AnimationTarget,
  startY: number = 100
) => {
  gsap.fromTo(
    target,
    { y: startY, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );
};

export const slideInHorizontally = (
  target: AnimationTarget,
  startX: number = 100
) => {
  gsap.fromTo(
    target,
    { x: startX, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );
};
// Fade-in animation with customizable duration

export const startLoadingAnimation = (
  textRef: HTMLDivElement | null,
  onLoadingComplete: () => void
) => {
  const chars = textRef?.children as HTMLCollectionOf<HTMLElement>;

  const tl = gsap.timeline({
    defaults: { ease: "power1.inOut" },
  });

  tl.fromTo(
    chars,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    }
  );

  tl.to(".screen", {
    clipPath: "ellipse(100% 30% at 50% 0%)",
    delay: 1,
    duration: 3,
    y: "-30vh",
    ease: "expo.inOut",
    onComplete: () => {
      console.log("GSAP loading animation complete.");
      onLoadingComplete(); // Call the callback to update state
    },
  }).from("#main-content", { opacity: 0, duration: 2, y: 0 });
};

export const animateProjects = () => {
  // Trigger GSAP animation when scrolling
  gsap.from(".project", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".project", // The element to trigger the animation
      //   start: "top 50%",
      end: "bottom top",
      toggleActions: "play none none none", // Controls the animation play behavior
    },
  });
};
export const openMenuAnimation = (
  menuItems: HTMLElement[],
  textElements: HTMLElement[]
) => {
  gsap.fromTo(
    menuItems,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    }
  );

  gsap.fromTo(
    textElements,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    }
  );
};

// Animation for closing the menu
export const closeMenuAnimation = (
  menuItems: HTMLElement[],
  textElements: HTMLElement[],
  onComplete: () => void
) => {
  // Optionally, you can clear any previous animations
  gsap.killTweensOf(textElements); // Clear any running animation for text elements

  gsap.to(textElements, {
    opacity: 0, // Fade out
    y: 50, // Move down
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    onComplete, // Callback to close the menu
  });

  gsap.to(menuItems, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    onComplete, // Callback to close the menu
  });
};

// Hover animation for menu items
export const hoverMenuItemAnimation = (
  items: HTMLElement[],
  index: number,
  isHover: boolean
) => {
  items.forEach((item, idx) => {
    if (idx !== index) {
      gsap.to(item, {
        opacity: isHover ? 0.4 : 1, // Fade out while moving
        duration: 0.5, // Animation duration
        ease: "power2.out", // Smooth easing
      });
    }
  });
};

// gsapAnimations.js
export const animateItems = (
  selector: string, // Selector for the items to animate
  containerSelector: string, // Selector for the container to trigger the animation
  options: AnimationOptions = {} // Optional animation configuration
): void => {
  const items = document.querySelectorAll<HTMLElement>(selector);
  if (items.length > 0) {
    gsap.fromTo(
      items,
      { opacity: 0, y: 20, ...options.initial },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerSelector,
          start: "top 80%",
          toggleActions: "play none none none",
          ...options.scrollTrigger,
        },
        ...options.animation,
      }
    );
  }
};
