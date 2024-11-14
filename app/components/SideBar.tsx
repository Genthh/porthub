import React, { useState, useEffect } from "react";
import BurgerMenu from "../_svgs/burgerMenu.svg";
import Image from "next/image";
import InIcon from "../_svgs/inIcon.svg";
import TwitterIcon from "../_svgs/xIcon.svg";
import InstagramIcon from "../_svgs/instagramIcon.svg";

export const SideBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Sidebar for desktop */}
      <div className="fixed mx-auto h-full w-80 py-10 px-5 flex-col justify-between lg:flex hidden">
        <div className="flex flex-col gap-y-10">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-white px-10 font-bold py-2">
              Hubfolio
            </div>
            <div className="cursor-pointer">
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
        <button className="text-white border border-white rounded-xl py-3">
          Work With Us
        </button>
      </div>

      {/* Header for mobile */}
      <div className="flex justify-between items-center px-5 w-full py-5 lg:hidden fixed z-40  top-0">
        <div className="rounded-full bg-white px-8 py-2">Hubfolio</div>
        <div className="cursor-pointer">
          <BurgerMenu />
        </div>
      </div>
    </>
  );
};
