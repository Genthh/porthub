import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: React.FC<{
  image: string;
  className?: string;
  onHover: (hoverState: boolean) => void;
  isHovered: boolean;
}> = ({ image, className = "", onHover, isHovered }) => (
  <div
    className={`project-card relative bg-gray-200 rounded-xl overflow-hidden hover-effect ${className}`}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <ProjectCategories isHovered={isHovered} />
  </div>
);

const ProjectCategories: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const categories = ["Branding", "UI/UX", "Motion"];
  return (
    <div
      className={`absolute bottom-2 left-2 flex items-center justify-center duration-300 ${
        isHovered ? "opacity-100 z-50" : "opacity-0"
      }`}
    >
      {categories.map((category, index) => (
        <p
          key={index}
          className="text-black bg-white rounded-full text-lg px-3 mx-1 hover:bg-red-500 hover:cursor-pointer duration-150 hover:text-white"
        >
          {category}
        </p>
      ))}
    </div>
  );
};

const Projects: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstProjectRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const thirdRowRef = useRef<HTMLDivElement>(null);

  const [hoverStates, setHoverStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const handleHover = (index: number, isHovered: boolean) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = isHovered;
    setHoverStates(updatedHoverStates);
  };

  useGSAP(() => {
    const context = gsap.context(() => {
      const animations = [
        {
          ref: firstProjectRef,
          trigger: sectionRef.current,
          start: "top 80%",
        },
        {
          ref: secondRowRef.current?.children,
          trigger: firstProjectRef.current,
          start: "bottom 70%",
          stagger: 0.2,
        },
        {
          ref: thirdRowRef.current?.children,
          trigger: secondRowRef.current,
          start: "bottom 70%",
          stagger: 0.2,
        },
      ];

      animations.forEach(({ ref, trigger, start, stagger = 0 }) => {
        if (ref) {
          gsap.from(ref, {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: "power2.out",
            stagger,
            scrollTrigger: {
              trigger,
              start,
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <div
      className="bg-white lg:ml-80 mx-3 lg:mx-10 rounded-xl flex flex-col px-10 mb-10 pb-10"
      ref={sectionRef}
    >
      <header className="flex flex-wrap justify-between my-20 items-center">
        <h2 className="text-3xl">Projects</h2>
        <p className="max-w-md">
          Business challenges are tough, but we have a proven record of
          elevating our partners to their next and best selves.
        </p>
      </header>

      <section className="flex flex-col w-full h-[600px]  hover-effect">
        <div
          ref={firstProjectRef}
          className="project-card relative bg-gray-500 h-full lg:w-3/4 rounded-xl"
          style={{
            backgroundImage: "url('/img1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProjectCategories isHovered={isHovered} />
        </div>
        <p className="text-xl font-bold my-5">Newz - Magazine Site</p>
      </section>

      <section
        className="flex md:flex-row flex-col md:flex-wrap w-full justify-between items-start md:h-96 h-[500px] mb-10 "
        // className="flex flex-wrap w-full justify-between items-start h-96 mt-10"
        ref={secondRowRef}
      >
        <div className="md:h-[70%] h-[600px] md:w-72 w-full">
          <div className="flex flex-col w-full h-full">
            <ProjectCard
              onHover={(isHovered) => handleHover(1, isHovered)}
              isHovered={hoverStates[1]}
              image="/img-4.jpg"
              className="p-6 my-3 w-full h-full"
            />
            <p className="text-xl font-bold">LW Rebrand</p>
          </div>
        </div>
        <div className="md:w-[55%] w-full h-full">
          <div className="w-full flex flex-col h-full">
            <ProjectCard
              onHover={(isHovered) => handleHover(2, isHovered)}
              isHovered={hoverStates[2]}
              image="/img-2.jpg"
              className="p-6 my-2 h-full"
            />
            <p className="text-xl font-bold">Dallas Ecolodge</p>
          </div>
        </div>
      </section>

      <section
        className="my-10 flex flex-col justify-end items-start lg:self-end lg:w-[60%] gap-y-4 "
        ref={thirdRowRef}
      >
        <div className="flex flex-col justify-center slef-center items-center h-72 lg:w-72 w-full">
          <ProjectCard
            onHover={(isHovered) => handleHover(3, isHovered)}
            isHovered={hoverStates[3]}
            image="/img-5.jpg"
            className="p-6 my-3 w-full lg:w-full h-full"
          />
          <p className="text-xl font-bold ">LW Rebrand</p>
        </div>
        <div className="w-full h-[450px]">
          <div className="w-full flex flex-col h-full">
            <ProjectCard
              onHover={(isHovered) => handleHover(4, isHovered)}
              isHovered={hoverStates[4]}
              image="/img-6.jpg"
              className="p-6 my-2 h-full"
            />
            <p className="text-xl font-bold">Newz - Magazine Site</p>
          </div>
        </div>
      </section>
      <section
        className="flex md:flex-row flex-col md:flex-wrap w-full justify-between items-start md:h-96 h-[500px] mb-10 "
        // ref={secondRowRef}
      >
        <div className="md:w-[55%] w-full h-full">
          <div className="w-full flex flex-col h-full">
            <ProjectCard
              onHover={(isHovered) => handleHover(5, isHovered)}
              isHovered={hoverStates[5]}
              image="/img-2.jpg"
              className="p-6 my-2 h-full"
            />
            <p className="text-xl font-bold">Dallas Ecolodge</p>
          </div>
        </div>
        <div className="md:h-[70%] h-[600px] md:w-72 w-full">
          <div className="flex flex-col w-full h-full">
            <ProjectCard
              onHover={(isHovered) => handleHover(6, isHovered)}
              isHovered={hoverStates[6]}
              image="/img-4.jpg"
              className="p-6 my-3 w-full h-full"
            />
            <p className="text-xl font-bold">LW Rebrand</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
