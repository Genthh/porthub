import React, { useEffect, useRef } from "react";
import Accordion from "./controlled/Accordion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const items = [
  {
    title: "Research",
    content:
      "Gaining insights about your industry, audience, and competition to lay the groundwork for a cohesive brand identity. This includes discussions to align on your vision and goals.",
  },
  {
    title: "Concept Design",
    content:
      "Crafting unique design concepts that reflect your brand’s personality and values. This step ensures every element resonates with your target audience.",
  },
  {
    title: "Implementation",
    content:
      "Transforming approved concepts into a fully realized brand identity, including logo design, typography, color palette, and supporting visuals.",
  },
  {
    title: "Testing",
    content:
      "Reviewing the brand assets in various applications to ensure consistency and effectiveness, followed by adjustments to perfect the final deliverables.",
  },
];

const Process = () => {
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      statsRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%", // Start animation when the section is 80% in view
          end: "top 50%",
          toggleActions: "play none none none", // Only play animation once
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        // y: 50,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        // y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="lg:ml-[333px] lg:mr-[100px] mx-3 lg:mx-0 bg-customRed relative rounded-2xl">
      <div className="rounded-2xl md:px-10 px-3  md:pb-20 py-7 md:py-10 my-4 bg-light h-fit w-full">
        <header className="flex flex-wrap justify-between items-center mt-5 mx-7 md:mx-0">
        <h2 className="text-5xl font-semibold lg:ml-2  tracking-tighter">
            Process
          </h2>
          <p className="max-w-xl text-sm lg:pl-16 mt-5 mb-10 md:mt-0 md:mb-0">
            Building impactful brands starts with a clear, creative approach.
            Here’s how I elevate my clients to their next and best selves:
          </p>
        </header>
        <div className="lg:mt-20 mx-7 md:mx-0 flex flex-wrap justify-between items-center">
          <Image
            src="https://uithemez.com/i/hubfolio_HTML/creative_agency/assets/imgs/process.svg"
            alt="Process illustration"
            width={330}
            height={300}
            ref={imageRef}
            className="md:my-0   my-5 lg:ml-16"
          />
          <div className="max-w-xl mt-5 space-y-2">
            <Accordion
              activeBorderColor="#E34738"
              titleColor="#000000"
              items={items}
            />
          </div>
        </div>
      </div>
      <div
        ref={statsRef}
        className="py-10 lg:pt-10 lg:pb-14 px-11 md:px-10 text-start"
      >
        <div className="flex flex-wrap gap-y-14 justify-between items-start my-4 text-white">
          <div className="text-5xl md:max-w-56 w-full flex flex-col ">
            95%
            <span className="text-sm mt-8 uppercase max-w-52">
              Clients satisfied and repeating
            </span>
          </div>
          <div className="text-5xl flex flex-col max-w-56 lg:ml-5 w-full">
            50+
            <span className="text-sm mt-8 uppercase">
              projects completed in 4 countries
            </span>
          </div>
          <div className="text-5xl flex flex-col max-w-56 lg:ml-7 w-full">
            5+
            <span className="text-sm mt-8 uppercase">
              years of experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
