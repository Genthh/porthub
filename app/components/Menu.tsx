import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import CloseIcon from "../_svgs/closeIcon.svg";
import PlusIcon from "../_svgs/plusIcon.svg";
import { hoverMenuItemAnimation } from "./animations";
import SocialMediaLinks from "./SocialMediaLinks";
import { DownloadCvButton } from "./controlled/DownloadCvButton";

export const Menu: React.FC<{ toggleMenu: () => void; isOpen: boolean }> = ({
  toggleMenu,
  isOpen,
}) => {
  const menuItemsRef = useRef<HTMLLIElement[]>([]);
  const router = useRouter(); 

  const handleHover = (index: number, isHover: boolean) => {
    hoverMenuItemAnimation(menuItemsRef.current, index, isHover);
  };

  const handleNavigation = (href: string) => {
    toggleMenu(); 
    setTimeout(() => {
      router.push(href); 
    }, 600); 
  };

  return (
    <div className="flex justify-between items-center h-full w-full">
      <div
        onClick={isOpen ? toggleMenu : undefined}
        className="absolute cursor-pointer z-50 top-0 right-0 flex justify-end items-center m-5 closeIcon"
      >
        <CloseIcon />
      </div>

      <div className="flex flex-col  justify-start md:justify-center h-full w-full md:ml-40 mx-10 md:mx-0 py-40 md:py-0 text-white">
        <ul className="md:text-5xl text-3xl space-y-10 font-bold max-w-56 justify-between md:max-w-72">
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <li
              key={index}
              ref={(el) => {
                if (el) menuItemsRef.current[index] = el;
              }}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
              className="cursor-pointer menu-item flex items-center  gap-x-5"
            >
              <button
                onClick={() => handleNavigation(item.href)}
                className="flex items-center justify-between gap-x-5 text-white focus:outline-none"
              >
                <span>{item.name}</span>
                <span>

                <PlusIcon />
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="block md:hidden mt-10">
        <SocialMediaLinks />
        <p className="my-4 text-gray-400  text-base anim-text">
          © 2024, All Rights Reserved
        </p>
        <DownloadCvButton/>
        </div>
      </div>

      {/* Info Section */}
      <div className="hidden md:flex flex-col justify-center items-center bg-opacity-5 h-full md:w-[600px] bg-white info-section px-2">
        <h1 className="md:text-5xl text-xl my-5 font-bold text-white anim-text">
          Lorik Zekaj
        </h1>
        <SocialMediaLinks />
        <p className="mt-5 text-white anim-text">lorikzek@gmail.com</p>
        <p className="my-1 text-white anim-text">+383-49-828-434</p>
        <p className="text-white anim-text">Based in Prishtina, Kosovo</p>
        <p className="text-white">(Southeast Europe)</p>
        <p className="my-8 text-gray-400 text-base anim-text">
          © 2024, All Rights Reserved
        </p>
        <div className="w-full px-10">

        <DownloadCvButton/>
        </div>
      </div>
    </div>
  );
};
