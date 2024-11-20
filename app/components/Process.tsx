import React, { useEffect } from "react";
import Accordion from "./controlled/Accordion";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const items = [
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bottomSection = document.querySelector(".bottom-section");

      gsap.fromTo(
        bottomSection,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".maincomp",
            start: "top top%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="ml-80 mx-10 bg-red-600 relative  rounded-xl maincomp">
      <div className="rounded-xl p-10 pb-20 bg-white h-fit w-full">
        <header className="flex flex-wrap justify-between  items-center">
          <h2 className="text-3xl">Process</h2>
          <p className="max-w-xl pl-16">
            Business challenges are tough, but we have a proven record of
            elevating our partners to their next and best selves.
          </p>
        </header>
        <div className="mt-20 flex justify-between">
          <Image
            src="https://uithemez.com/i/hubfolio_HTML/creative_agency/assets/imgs/process.svg"
            alt="empty"
            width={300}
            height={200}
          />
          <div className="max-w-xl space-y-2">
            <Accordion items={items} />
          </div>
        </div>
      </div>
      <div className="p-10 text-start bottom-section">
        <div className="flex justify-between items-start my-3 text-white">
          <p className="text-5xl max-w-56 w-full">95%</p>
          <p className="text-5xl max-w-56 ml-5 w-full">125+</p>
          <p className="text-5xl max-w-56 ml-7 w-full">24</p>
        </div>
        <div className="flex justify-between text-white">
          <p className="text-lg max-w-56">Clients satisfied and repeating</p>
          <p className="text-lg max-w-56">projects completed in 20 countries</p>
          <p className="text-lg max-w-56">
            award winning and honorable recognition
          </p>
        </div>
      </div>
    </div>
  );
};
export default Process;
