import React, { useState, useRef } from "react";
import BurgerMenu from "../_svgs/burgerMenu.svg";
import Image from "next/image";
import { gsap } from "gsap";
import { Menu } from "./Menu";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

   const toggleMenu = () => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <>
      <div className="fixed ml-7 h-full lg:w-64 pt-8 pb-10 px-5  flex-col justify-between lg:flex hidden z-50">
        <div className="flex flex-col gap-y-10">
          <div className="flex items-center justify-between">
            <button className="rounded-full bg-white px-6 font-bold py-1">
              Lorik Zekaj
            </button>
            <div onClick={toggleMenu} className="cursor-pointer">
              <BurgerMenu />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-white text-lg">
            <Image
              src="https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//LorikZekajProfile.png"
              alt="Lorik Zekaj"
              width={240}
              height={240}
              className="rounded-full cursor-pointer"
            />
            <p className="mt-5">lorikzek@gmail.com</p>
            <p className="">+383-49-828-434</p>
            <p className="text-center">Based in Prishtina, Kosovo</p>
            <p>(Southeast Europe)</p>
            <p className="my-8 text-customColor text-sm">
              © 2024, All Rights Reserved
            </p>
            <SocialMediaLinks />
          </div>
        </div>
        <Link
          href="/contact"
          className="text-white text-sm border border-customColor rounded-full hover:bg-white hover:text-primary duration-150 ease-in py-3 flex justify-center items-center gap-x-5 group"
        >
          <svg
            id="OBJECT"
            fill="white"
            height="15"
            viewBox="0 0 512 512"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:fill-black duration-150 ease-in"
          >
            <path d="m457 61h-402a55.06 55.06 0 0 0 -55 55v280a55.06 55.06 0 0 0 55 55h402a55.06 55.06 0 0 0 55-55v-280a55.06 55.06 0 0 0 -55-55zm25 55v280a24.24 24.24 0 0 1 -.27 3.63l-144.22-143.63 144.22-143.63a24.24 24.24 0 0 1 .27 3.63zm-25-25a26 26 0 0 1 3.44.24l-204.44 203.59-204.44-203.59a26 26 0 0 1 3.44-.24zm-426.73 308.63a24.24 24.24 0 0 1 -.27-3.63v-280a24.24 24.24 0 0 1 .27-3.63l144.22 143.63zm24.73 21.37a26 26 0 0 1 -3.44-.24l144.19-143.59 49.67 49.46a15 15 0 0 0 21.16 0l49.67-49.46 144.19 143.59a26 26 0 0 1 -3.44.24z" />
          </svg>
          Work With Us
        </Link>
      </div>

      <div className="flex justify-between items-center px-5 w-full py-5 lg:hidden fixed z-40 top-0">
        <div className="rounded-full bg-white px-8 py-2"> Lorik Zekaj</div>
        <div onClick={toggleMenu} className="cursor-pointer">
          <BurgerMenu />
        </div>
      </div>

      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 w-full h-full bg-primary z-1000 -translate-x-full"
        style={{
          backgroundPosition: "center",
        }}
      >
        <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};
