import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BurgerMenu from "../_svgs/burgerMenu.svg";
import CloseIcon from "../_svgs/closeIcon.svg";
import SocialMediaLinks from "./SocialMediaLinks";
import { useGSAP } from "@gsap/react";

export const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const borderRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sidebarRef = useRef(null);
  console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    linkRefs.current.forEach((link, index) => {
      if (link && borderRefs.current[index]) {
        gsap.set(borderRefs.current[index], {
          scaleX: 0,
          transformOrigin: "center",
        });

        link.addEventListener("mouseenter", () => {
          gsap.to(borderRefs.current[index], {
            scaleX: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(link, {
            y: -3,
            letterSpacing: "1px",
            duration: 0.5,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(borderRefs.current[index], {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(link, {
            y: 0,
            letterSpacing: "0px",
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }
    });
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className={`md:px-6 py-4 w-full max-w-3xl border mt-2 z-1000 rounded-2xl ml-5 border-customColor hidden md:block fixed top-0  transition-all duration-300 ease-in-out ${
          isScrolled ? "py-2 scale-95 bg-opacity-80 backdrop-blur-md" : ""
        }`}
      >
        <div className="flex m justify-between items-center">
          <button
            ref={buttonRef}
            className="rounded-full bg-white px-6 mr-20 font-bold py-1 text-black"
          >
            Lorik Zekaj
          </button>
          <div className="flex gap-x-8">
            {["Home", "Projects", "Contact"].map((text, index) => (
              <Link
                key={index}
                href="/"
                // ref={(el) => (linkRefs.current[index] = el)}
                className="relative text-white font-medium cursor-pointer group transition-all"
              >
                {text}
                <span
                  ref={(el) => {
                    borderRefs.current[index] = el;
                  }}
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="flex flex-col lg:hidden fixed z-1000 top-0 right-0 px-8 py-6">
        <div onClick={toggleMenu} className="cursor-pointer">
          <BurgerMenu />
        </div>
        {isOpen && (
          <div  className="w-full px-7 z-1000 fixed left-0 top-0 h-full bg-primary">
            <div onClick={toggleMenu} className="absolute cursor-pointer z-50 top-0 right-0 flex justify-end items-center m-5 closeIcon">
            <CloseIcon/>
            </div>
            <div className="flex flex-col justify-center h-5/6 mb-40 gap-y-10">
              {["Home", "Projects", "Contact"].map((text, index) => (
                <Link
                  key={index}
                  href="/"
                  className="relative text-white  text-4xl  font-medium cursor-pointer group transition-all"
                >
                  {text}
                  <span
                    ref={(el) => {
                      borderRefs.current[index] = el;
                    }}
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"
                  />
                </Link>
              ))}
        <SocialMediaLinks />
            </div>

          </div>
        )}
      </div>
    </>
  );
};
