import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const borderRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // if (buttonRef.current) {
    //     gsap.set(buttonRef.current, { scale: 1 });
    //     buttonRef.current.addEventListener("mouseenter", () => {
    //       gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    //     });
    //     buttonRef.current.addEventListener("mouseleave", () => {
    //       gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power1.out" });
    //     });
    //   }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    linkRefs.current.forEach((link, index) => {
      if (link && borderRefs.current[index]) {
        gsap.set(borderRefs.current[index], { scaleX: 0, transformOrigin: "center" });

        link.addEventListener("mouseenter", () => {
          gsap.to(borderRefs.current[index], { scaleX: 1, duration: 0.5, ease: "power2.out" });
          gsap.to(link, { y: -3, letterSpacing: "1px", duration: 0.5, ease: "power2.out" });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(borderRefs.current[index], { scaleX: 0, duration: 0.5, ease: "power2.out" });
          gsap.to(link, { y: 0, letterSpacing: "0px", duration: 0.5, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <div
      ref={navbarRef}
      className={`md:px-6 py-4 w-full max-w-3xl border mt-2 z-1000 rounded-2xl ml-5 border-customColor fixed top-0  transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2 scale-95 bg-opacity-80 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex m justify-between items-center">
        <button ref={buttonRef} className="rounded-full bg-white px-6 mr-20 font-bold py-1 text-black">
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
              ref={(el) => (borderRefs.current[index] = el)}
              className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform"
              />
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};
