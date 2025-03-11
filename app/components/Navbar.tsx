import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BurgerMenu from "../_svgs/burgerMenu.svg";
import CloseIcon from "../_svgs/closeIcon.svg";
import SocialMediaLinks from "./SocialMediaLinks";
import { useGSAP } from "@gsap/react";
import { DownloadCvButton } from "./controlled/DownloadCvButton";

export const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const borderRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const toggleMenu = () => {
    if (!isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
    setIsOpen(!isOpen);
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
      {/* Desktop Navbar */}
      <div
        ref={navbarRef}
        className={`py-4 w-full max-w-7xl border mt-2 z-1000 rounded-2xl px-6 border-customColor hidden md:block fixed top-0 transition-all duration-300 ease-in-out ${
          isScrolled ? "py-2 scale-95 bg-opacity-80 backdrop-blur-md" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <button
            ref={buttonRef}
            className="rounded-full bg-white px-6 font-bold py-1 text-black"
          >
            Lorik Zekaj
          </button>
          <div className="flex gap-x-8">
            {[
              { text: "Home", href: "/" },
              { text: "Projects", href: "/projects" },
              { text: "Contact", href: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-white font-medium cursor-pointer group transition-all"
              >
                {item.text}
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

      {/* Mobile Menu */}
      <div className="flex flex-col lg:hidden fixed  z-1000 top-0 right-0 px-8 py-6">
        {/* Burger Menu Button */}
        <div
          onClick={toggleMenu}
          className="cursor-pointer bg-white/20 backdrop-blur-lg p-2 rounded-full"
        >
          <BurgerMenu />
        </div>

        {/* Sidebar Menu */}
        <div
          ref={sidebarRef}
          className="fixed right-0 top-0 h-full w-full bg-primary shadow-lg p-8 flex flex-col items-start justify-center transform translate-x-full opacity-0"
        >
          {/* Close Button */}
          <div
            onClick={toggleMenu}
            className="absolute cursor-pointer z-50 top-5 right-5"
          >
            <CloseIcon />
          </div>

          {/* Menu Links */}
          <div className="flex flex-col justify-center h-5/6 gap-y-10 mt-16">
            {[
              { text: "Home", href: "/" },
              { text: "Projects", href: "/projects" },
              { text: "Contact", href: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-white text-4xl font-medium cursor-pointer group transition-all"
              >
                {item.text}
                <span
                  ref={(el) => {
                    borderRefs.current[index] = el;
                  }}
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"
                />
              </Link>
            ))}

            <SocialMediaLinks />
            <div className="w-4/5">
              <DownloadCvButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};