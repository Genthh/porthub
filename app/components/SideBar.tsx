import React, { useState, useRef } from "react";
import BurgerMenu from "../_svgs/burgerMenu.svg";
import Image from "next/image";
import InIcon from "../_svgs/inIcon.svg";
import TwitterIcon from "../_svgs/xIcon.svg";
import InstagramIcon from "../_svgs/instagramIcon.svg";
import { gsap } from "gsap";
import EnvelopeIcon from "../_svgs/envelope.svg";
import { Menu } from "./Menu";
export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <>
      <div className="fixed mx-auto h-full w-80 py-10 px-5 flex-col justify-between lg:flex hidden z-50">
        <div className="flex flex-col gap-y-10">
          <div className="flex items-center justify-between">
            <button className="rounded-full bg-white px-10 font-bold py-2">
              Hubfolio
            </button>
            <div onClick={toggleMenu} className="cursor-pointer">
              <BurgerMenu />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-white text-lg">
            <Image
              src="/LorikZekaj.jpeg"
              alt="Lorik Zekaj"
              width={240}
              height={240}
              className="rounded-full cursor-pointer"
            />
            <p className="mt-5">Email@example.com</p>
            <p className="my-1">+383-49-000-000</p>
            <p>Based in Prishtina, Kosovo</p>
            <p className="my-8 text-gray-400 text-base">
              © 2024, All Rights Reserved
            </p>
            <div className="flex gap-x-5">
              <span className="border border-gray-300 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                <InstagramIcon />
              </span>
              <span className="border border-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                <TwitterIcon />
              </span>
              <span className="border border-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                <InIcon />
              </span>
            </div>
          </div>
        </div>
        <button className="text-white border border-white rounded-full hover:bg-white hover:text-primary duration-150  ease-in py-3 flex justify-center items-center gap-x-2">
          <EnvelopeIcon />
          Work With Us
        </button>
      </div>

      <div className="flex justify-between items-center px-5 w-full py-5 lg:hidden fixed z-40 top-0">
        <div className="rounded-full bg-white px-8 py-2">Hubfolio</div>
        <div onClick={toggleMenu} className="cursor-pointer">
          <BurgerMenu />
        </div>
      </div>

      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 w-full h-full bg-primary z-1000 -translate-x-full"
        style={{
          // backgroundImage: "url('/bgimage.jpg')",
          backgroundPosition: "center",
        }}
      >
        <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};
