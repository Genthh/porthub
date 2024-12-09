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
          start: "top 80%", // Start animation when the section is 80% in view
          end: "top 50%",
          toggleActions: "play none none none", // Only play animation once
        },
      }
    );
  }, []);

  return (
    <div className="lg:ml-[320px] mx-3 lg:mx-0 bg-customRed relative rounded-2xl">
      <div className="rounded-2xl md:px-10 px-3  md:pb-20 py-5 md:py-10 my-5 bg-white h-fit w-full">
        <header className="flex flex-wrap justify-between items-center">
          <h2 className="text-4xl font-semibold ml-1 uppercase tracking-tighter">
            Process
          </h2>
          <p className="max-w-xl lg:pl-16">
            Building impactful brands starts with a clear, creative approach.
            Here’s how I elevate my clients to their next and best selves:
          </p>
        </header>
        <div className="lg:mt-20 flex flex-wrap justify-between items-center">
          <Image
            src="https://uithemez.com/i/hubfolio_HTML/creative_agency/assets/imgs/process.svg"
            alt="Process illustration"
            width={330}
            height={300}
            ref={imageRef}
            className="md:mb-0 lg:ml-24"
          />
          <div className="max-w-xl space-y-2">
            <Accordion
              activeBorderColor="#E34738"
              titleColor="#000000"
              items={items}
            />
          </div>
        </div>
      </div>
      <div ref={statsRef} className=" py-4 px-3 lg:py-10 lg:px-10 text-start">
        <div className="flex flex-wrap gap-y-3 justify-between items-start my-4 text-white">
          <div className="lg:text-5xl text-2xl md:max-w-56 w-full flex flex-col">
            95%
            <span className="md:text-lg text-base">
              Clients satisfied and repeating
            </span>
          </div>
          <div className="lg:text-5xl flex flex-col text-2xl max-w-56 lg:ml-5 w-full">
            50+
            <span className="md:text-lg text-base">
              projects completed in 4 countries
            </span>
          </div>
          <div className="lg:text-5xl flex flex-col text-2xl max-w-56 lg:ml-7 w-full">
            5+<span className="md:text-lg text-base">years of experience</span>
          </div>
        </div>

        {/* <div className="flex justify-between gap-x-5 lg:gap-x-0 text-white">
          <p className="lg:text-lg lg:max-w-56">
          </p>
          <p className="lg:text-lg lg:max-w-56">years of experience</p>
        </div> */}
      </div>
    </div>
  );
};

export default Process;
