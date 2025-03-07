"use client";
import React, { useEffect, useRef } from "react";
import { Project, projects } from "../utils/datas";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const AllProjects: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      projectRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
      }
    );

    imageRefs.current.forEach((img) => {
      if (img) {
        gsap.set(img, { scale: 1 });
        img.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power1.out" });
        });
        img.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
      }
    });

    linkRefs.current.forEach((link) => {
      if (link) {
        gsap.set(link, { x: 0 });
        link.addEventListener("mouseenter", () => {
          gsap.to(link, { x: 5, duration: 0.3, ease: "power2.out" });
        });
        link.addEventListener("mouseleave", () => {
          gsap.to(link, { x: 0, duration: 0.3, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 xl:grid-cols-3 gap-x-8 px-4 md:px-8">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => {
            projectRefs.current[index] = el;
          }}
          className="border-t border-customColor shadow-md pb-4"
        >
          <div className="pt-4 flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-xl pb-3 font-bold text-white">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm mb-5">
                {project.description}
              </p>
            </div>
            <Link
              href={`/projectDetails/${project.uuid}`}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              className="border border-customColor px-4 py-1 rounded-full cursor-pointer hover:bg-[#d0ff71] duration-300 ease-out hover-effect"
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
            </Link>
          </div>

          {/* Wrap Image inside Link to make it clickable */}
          <Link href={`/projectDetails/${project.uuid}`}>
            <Image
              src={project.image}
              alt={project.title}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              height={400}
              width={400}
              className="w-full h-72 object-cover my-2 rounded-lg cursor-pointer hover-effect"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;