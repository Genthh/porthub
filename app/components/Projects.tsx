import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { projects } from "../utils/datas";
import { ProjectCard } from "./controlled/ProjectCard";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const [hoverStates, setHoverStates] = useState<boolean[]>(
    Array(projects.length).fill(false)
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRefs = useRef<(HTMLElement | null)[]>([]);

  const router = useRouter();

  const handleRedirect = (uuid: string) => {
    router.push(`/projectDetails/${uuid}/`);
  };

  const handleHover = (index: number, isHovered: boolean) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = isHovered;
    setHoverStates(updatedHoverStates);
  };
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useGSAP(() => {
    const context = gsap.context(() => {
      rowsRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.from(ref.children, {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const groupedProjects = projects.reduce<Record<number, typeof projects>>(
    (acc, project) => {
      if (project.row !== undefined) {
        if (!acc[project.row]) acc[project.row] = [];
        acc[project.row].push(project);
      }
      return acc;
    },
    {}
  );

  return (
    <div
      className="bg-white lg:ml-[320px] mx-3 lg:mx-0 rounded-2xl flex flex-col justify-center lg:px-10 px-5 md:py-16  my-4 py-10 md:pb-10  h-fit "
      ref={sectionRef}
    >
      <header className="flex flex-wrap justify-between  items-center mb-4">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <p className="max-w-lg text-base text-txtGrayColor">
          Business challenges are tough, but we have a proven record of
          elevating our partners to their next and best selves.
        </p>
      </header>
      {Object.entries(groupedProjects).map(([row, rowProjects]) => (
        <section
          key={row}
          className={`flex flex-wrap w-full mb-10 justify-between`}
          ref={(el) => {
            rowsRefs.current[+row] = el as HTMLDivElement | null; // Perform assignment as side effect
          }}
        >
          {rowProjects.map(({ image, title, width, height, uuid }, index) => (
            <div
              key={uuid}
              className={`flex flex-col md:mx-2 ${
                rowProjects[0]?.position === "start"
                  ? "self-start"
                  : rowProjects[0]?.position === "center"
                  ? "self-center"
                  : "self-end"
              }`}
              style={{
                width: "100%",
                height: "300px",
                ...(window.innerWidth >= 1024 && {
                  width: width,
                  height: height,
                }),
              }}
            >
              <ProjectCard
                onHover={(isHovered) => handleHover(index, isHovered)}
                isHovered={hoverStates[index]}
                image={image}
                onClick={() => handleRedirect(uuid)}
                className="p-6 my-3 w-full h-full"
              />
              <p className="text-xl font-bold my-2">{title}</p>
            </div>
          ))}
        </section>
      ))}
      <Link
        href="/projects"
        className="py-3  lg:mb-0 px-8 bg-customRed self-center text-sm text-white rounded-full 
        border border-transparent 
        hover:bg-transparent hover:text-black hover:border-customRed 
        transition-all duration-500 ease-in-out"
      >
        See All Projects →
      </Link>
    </div>
  );
};

export default Projects;
