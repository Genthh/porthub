import React, { useEffect, useRef } from "react";
import CloseIcon from "../_svgs/closeIcon.svg";
import PlusIcon from "../_svgs/plusIcon.svg";
import InIcon from "../_svgs/inIcon.svg";
import TwitterIcon from "../_svgs/xIcon.svg";
import InstagramIcon from "../_svgs/instagramIcon.svg";
import {
  closeMenuAnimation,
  hoverMenuItemAnimation,
  openMenuAnimation,
} from "./animations";
import { useGSAP } from "@gsap/react";
import SocialMediaLinks from "./SocialMediaLinks";

export const Menu: React.FC<{
  toggleMenu: () => void;
  isOpen: boolean;
}> = ({ toggleMenu, isOpen }) => {
  const menuItemsRef = useRef<HTMLLIElement[]>([]);
  const textElementsRef = useRef<HTMLElement[]>([]);

  const handleMenuClose = () => {
    // closeMenuAnimation(
    //   menuItemsRef.current,
    //   textElementsRef.current,
    // );
    toggleMenu;
  };

  // useGSAP(() => {
  //   if (isOpen) {
  //     openMenuAnimation(menuItemsRef.current, textElementsRef.current);
  //   }
  // }, [isOpen]);

  const handleHover = (index: number, isHover: boolean) => {
    hoverMenuItemAnimation(menuItemsRef.current, index, isHover);
  };

  return (
    <div className="flex justify-between items-center h-full w-full">
      <div
        onClick={isOpen ? toggleMenu : undefined}
        // ref={closeIconRef}
        className="absolute cursor-pointer z-50 top-0 right-0 flex justify-end items-center m-5 closeIcon"
      >
        <CloseIcon />
      </div>
      <div className="flex flex-col md:ml-40 ml-3 text-white">
        <ul className="md:text-5xl text-xl space-y-10 font-bold max-w-52  ">
          {["Home", "Projects", "Contact Us"].map((item, index) => (
            <li
              key={index}
              ref={(el) => {
                if (el) menuItemsRef.current[index] = el;
              }}
              className="cursor-pointer menu-item flex items-center space-x-3  justify-between "
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <span>{item}</span>
              <PlusIcon />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white flex flex-col justify-center items-center bg-opacity-5 h-full md:w-5/12 info-section px-2">
        <h1
          className="md:text-5xl text-xl my-5 font-bold text-white anim-text"
          ref={(el) => {
            if (el) {
              textElementsRef.current.push(el);
            }
          }}
        >
          Lorik Zekaj
        </h1>
        <SocialMediaLinks />

        {/* <div className="flex gap-x-5">
          {[InstagramIcon, TwitterIcon, InIcon].map((Icon, index) => (
            <span
              key={index}
              className="border border-gray-300 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer anim-text"
              ref={(el) => {
                if (el) {
                  textElementsRef.current.push(el);
                }
              }}
            >
              <Icon />
            </span>
          ))}
        </div> */}
        <p
          className="mt-5 text-white anim-text"
          ref={(el) => {
            if (el) {
              textElementsRef.current.push(el);
            }
          }}
        >
          lorikzek@gmail.com
        </p>
        <p
          className="my-1 text-white anim-text"
          ref={(el) => {
            if (el) {
              textElementsRef.current.push(el);
            }
          }}
        >
          +383-49-828-434
        </p>
        <p
          className="text-white anim-text"
          ref={(el) => {
            if (el) {
              textElementsRef.current.push(el);
            }
          }}
        >
          Based in Prishtina, Kosovo
        </p>
        <p className="text-white">(Southeast Europe)</p>
        <p
          className="my-8 text-gray-400 text-base anim-text"
          ref={(el) => {
            if (el) {
              textElementsRef.current.push(el);
            }
          }}
        >
          © 2024, All Rights Reserved
        </p>
      </div>
    </div>
  );
};
