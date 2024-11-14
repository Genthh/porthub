import React, { useState } from "react";
import { animateProjects } from "./animations";
import { useGSAP } from "@gsap/react";

export const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  useGSAP(() => {
    animateProjects();
  }, []);

  return (
    <div className="bg-white lg:ml-80 mx-3 lg:mx-10 rounded-xl h-screen flex flex-col px-10">
      <div className="flex justify-between my-20 items-center">
        <p className="text-3xl">Projects</p>
        <p className="max-w-md">
          Business challenges are tough, but we have a proven record of
          elevating our partners to their next and best selves.
        </p>
      </div>

      <div
        className="project relative bg-gray-500 h-full w-3/4 rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url('/img1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute bottom-2 left-2 flex items-center justify-center  duration-300 ${
            isHovered ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          <p className="text-black bg-white rounded-full text-lg px-3 hover:bg-red-500 hover:cursor-pointer duration-150">
            Branding
          </p>
          <p className="text-black bg-white rounded-full text-lg px-3 hover:bg-red-500 hover:cursor-pointer mx-2 duration-150">
            UI/UX
          </p>
          <p className="text-black bg-white rounded-full text-lg px-3 hover:bg-red-500 hover:cursor-pointer duration-150">
            Motion
          </p>
        </div>
      </div>

      <div className="project bg-gray-200 p-6 my-6 rounded-xl">
        <h2 className="text-2xl font-bold">Project 2</h2>
        <p>Description of project 2...</p>
      </div>

      <div className="project bg-gray-200 p-6 my-6 rounded-xl">
        <h2 className="text-2xl font-bold">Project 3</h2>
        <p>Description of project 3...</p>
      </div>
    </div>
  );
};
