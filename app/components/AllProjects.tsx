"use client";
import React, { useEffect, useState } from "react";
import { Project, projects } from "../utils/datas";
import Link from "next/link";
import Image from "next/image";

const AllProjects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 px-4 md:px-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border-t  border-customColor shadow-md pb-4"
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
              href={`/projectDetails/${project.uuid}/`}
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
          <Image
            src={project.image}
            alt={project.title}
            height={400}
            width={400}
            className="w-full h-72 object-cover my-2 rounded-lg cursor-pointer hover-effect"
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
