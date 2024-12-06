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
      "Once the wireframe gets approved at step 1, we’ll build a prototype design to visualize the idea.",
  },
  {
    title: "Concept Design",
    content:
      "Designing concepts to ensure they meet user needs and project goals.",
  },
  {
    title: "Implementation",
    content: "Development phase to turn ideas into reality.",
  },
  {
    title: "Testing",
    content: "Thoroughly testing the product to ensure quality and usability.",
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
      <div className="rounded-2xl md:px-10 px-3  md:pb-20 py-5 md:py-20 my-5 bg-white h-fit w-full">
        <header className="flex flex-wrap justify-between items-center">
          <h2 className="md:text-3xl text-2xl ">Process</h2>
          <p className="max-w-xl lg:pl-16">
            Business challenges are tough, but we have a proven record of
            elevating our partners to their next and best selves.
          </p>
        </header>
        <div className="lg:mt-20 flex flex-wrap justify-between ">
          <Image
            src="https://uithemez.com/i/hubfolio_HTML/creative_agency/assets/imgs/process.svg"
            alt="Process illustration"
            width={300}
            height={200}
            ref={imageRef}
            className="mb-3 md:mb-0"
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
      <div ref={statsRef} className="p-10 text-start">
        <div className="flex justify-between items-start my-4 text-white">
          <div className="lg:text-5xl text-2xl max-w-56 w-full flex flex-col">
            95%
            <span className="text-lg"> Clients satisfied and repeating</span>
          </div>
          <div className="lg:text-5xl flex flex-col text-2xl max-w-56 ml-5 w-full">
            50+
            <span className="text-lg">projects completed in 4 countries</span>
          </div>
          <div className="lg:text-5xl flex flex-col text-2xl max-w-56 ml-7 w-full">
            5+<span className="text-lg">years of experience</span>
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
