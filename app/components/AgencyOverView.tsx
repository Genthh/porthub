import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { slideInFromBottom } from "./animations";
import { useGSAP } from "@gsap/react";
import { Button } from "./controlled/Buttons";
import { MainLayout, SecondaryLayout } from "./controlled/Layouts";

const AgencyOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, content: "+5", subTitle: "Years of experience" },
    { id: 2, content: " +20", subTitle: "Projects completed" },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useGSAP(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `-${currentIndex * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.fromTo(
        subTitleRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.7,
        }
      );
    }
  }, [currentIndex]);
  useGSAP(() => {
    if (containerRef.current) {
      slideInFromBottom(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="py-5  flex flex-wrap gap-x-2 lg:ml-80">
      <MainLayout
        style={{
          backgroundImage: "url(/images/heroImg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        positionClasses="absolute bottom-0 left-0 w-full h-screen bg-cover bg-center overflow-hidden z-0"
      />

      <div className="flex flex-col gap-y-2 mx-3 lg:mx-0 lg:mt-0 mt-2 lg:w-[31%]">
        <SecondaryLayout description="Based in Boston, MA. We're an agency focused on crafting experience design & development digital products.">
          <ActionButtons />
        </SecondaryLayout>
        <div className="flex flex-col rounded-xl lg:h-[40%] h-[300px] shadow-lg bg-customRed relative overflow-hidden p-4">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out w-full h-full"
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 flex items-center justify-center text-white  font-bold text-5xl"
              >
                {slide.content}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center gap-x-5 mt-auto pt-4">
            <p ref={subTitleRef} className="text-white text-xl max-w-20 ">
              {slides[currentIndex].subTitle}
            </p>
            <div className="flex gap-x-3">
              <button
                onClick={handlePrev}
                className={`${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                } border border-white bg-transparent text-white p-2 rounded-full shadow-md hover:bg-white hover:text-customRed duration-150 ease-in`}
                disabled={currentIndex === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className={`${
                  currentIndex === slides.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }  border border-white bg-transparent text-white p-2 rounded-full shadow-md hover:bg-white hover:text-customRed duration-150 ease-in`}
                disabled={currentIndex === slides.length - 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActionButtons = () => (
  <div>
    <Button
      label="Branding"
      color="bg-gray-200"
      rotation="rotate-45"
      bottom="bottom-5"
      left="left-[-5%]"
    />
    <Button
      label="UI/UX Design"
      color="bg-customRed text-white"
      rotation="-rotate-45"
      bottom="bottom-14 "
      left="left-20"
    />
    <Button
      label="SEO Marketing"
      color="bg-gray-200 text-black"
      rotation="rotate-0"
      bottom="bottom-[-3%]"
      right="right-16"
    />
    <Button
      label="Motion"
      color="bg-black text-white"
      rotation="-rotate-12"
      bottom="bottom-0"
      right="right-0"
    />
  </div>
);

export default AgencyOverview;
