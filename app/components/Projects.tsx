import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { projects } from "../utils/datas";
import { ProjectCard } from "./controlled/ProjectCard";
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

  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.row]) acc[project.row] = [];
    acc[project.row].push(project);
    return acc;
  }, {} as Record<number, typeof projects>);

  return (
    <div
      className="bg-white lg:ml-80 mx-3 lg:mx-10 rounded-xl flex flex-col lg:px-10 px-5 mb-10 md:pb-10  h-fit"
      ref={sectionRef}
    >
      <header className="flex flex-wrap justify-between md:my-20 my-5 items-center">
        <h2 className="text-3xl">Projects</h2>
        <p className="max-w-md">
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
              className={`flex flex-col mx-2 ${
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
          ))}{" "}
        </section>
      ))}
    </div>
  );
};

export default Projects;
