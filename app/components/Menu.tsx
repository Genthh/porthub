import React, { useEffect } from "react";
import CloseIcon from "../_svgs/closeIcon.svg";
import PlusIcon from "../_svgs/plusIcon.svg";
import InIcon from "../_svgs/inIcon.svg";
import TwitterIcon from "../_svgs/xIcon.svg";
import InstagramIcon from "../_svgs/instagramIcon.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const Menu = ({
  toggleMenu,
  isOpen,
}: {
  toggleMenu: () => void;
  isOpen: boolean;
}) => {
  const handleMenuClose = () => {
    const textElements = document.querySelectorAll(".info-section .anim-text");
    const menuItems = document.querySelectorAll(".menu-item");

    // Animate the text inside the info section
    gsap.to(textElements, {
      y: 30, // Move down
      opacity: 0, // Fade out
      duration: 0.8, // Animation duration
      ease: "power2.out", // Smooth easing
      stagger: 0.2, // Delay between each text element
    });

    // Animate the menu items
    gsap.to(menuItems, {
      y: 50, // Move down
      opacity: 0, // Fade out
      duration: 0.8, // Animation duration
      ease: "power2.out", // Smooth easing
      stagger: 0.2, // Delay between each item
      onComplete: toggleMenu, // Close the menu after animations complete
    });
  };

  useGSAP(() => {
    if (isOpen) {
      const menuItems = document.querySelectorAll(".menu-item");
      const textElements = document.querySelectorAll(
        ".info-section .anim-text"
      );
      const closeIcon = document.querySelector(".closeIcon");
      // Animate the menu items
      gsap.fromTo(
        menuItems,
        {
          y: 50, // Start slightly below their position
          opacity: 0, // Start with full transparency
        },
        {
          y: 0, // Move to their original position
          opacity: 1, // Fade in
          duration: 0.8, // Animation duration
          ease: "power2.out", // Smooth easing
          stagger: 0.2, // Delay between each item
        }
      );

      // Animate the text inside the info section
      gsap.fromTo(
        textElements,
        {
          y: -100, // Start below
          opacity: 0, // Start transparent
        },
        {
          y: 0, // Move to position
          opacity: 1, // Fade in
          duration: 0.8, // Animation duration
          ease: "power2.out", // Smooth easing
          stagger: 0.2, // Delay between each text element
        }
      );
    }
  }, [isOpen]);

  const handleHover = (index: number, isHover: boolean) => {
    const items = document.querySelectorAll(".menu-item");
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

  return (
    <div className="flex justify-between items-center h-full w-full">
      <div
        onClick={handleMenuClose}
        className="absolute cursor-pointer z-50 top-0 right-0 flex justify-end items-center m-5 closeIcon"
      >
        <CloseIcon />
      </div>
      <div className="flex flex-col ml-40 text-white">
        <ul className="text-5xl space-y-10 font-bold">
          {["Home", "Pages", "Portfolio", "Blog", "Contact Us"].map(
            (item, index) => (
              <li
                key={index}
                className="cursor-pointer menu-item flex items-center space-x-3"
                onMouseEnter={() => handleHover(index, true)}
                onMouseLeave={() => handleHover(index, false)}
              >
                <span>{item}</span>
                <PlusIcon />
              </li>
            )
          )}
        </ul>
      </div>
      <div className="bg-white flex flex-col justify-center items-center bg-opacity-5 h-full w-5/12 info-section">
        <h1 className="text-5xl my-5 font-bold text-white anim-text">
          Hubfolio
        </h1>
        <div className="flex gap-x-5">
          <span className="border border-gray-300 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer anim-text">
            <InstagramIcon />
          </span>
          <span className="border border-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer anim-text">
            <TwitterIcon />
          </span>
          <span className="border border-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer anim-text">
            <InIcon />
          </span>
        </div>
        <p className="mt-5 text-white anim-text">Email@example.com</p>
        <p className="my-1 text-white anim-text">+383-49-000-000</p>
        <p className="text-white anim-text">Based in Prishtina, Kosovo</p>
        <p className="my-8 text-gray-400 text-base anim-text">
          © 2024, All Rights Reserved
        </p>
      </div>
    </div>
  );
};
