"use client";
import React from "react";
import AllProjects from "../components/AllProjects";
import SmoothScroll from "../components/controlled/SmoothScroll";
import CustomCursor from "../components/controlled/CustomCursor";

const SmoothScrollingWrapper = () => {
  return (
    <div className="">
      <SmoothScroll>
        <h1 className="text-7xl font-bold text-center py-10">Our Projects</h1>
        <AllProjects />
      </SmoothScroll>
    </div>
  );
};
const Home: React.FC = () => {
  return (
    <div className="mx-auto  max-w-8xl  flex flex-col  justify-center relative text-white min-h-screen">
      <CustomCursor />
      <SmoothScrollingWrapper />
    </div>
  );
};

export default Home;
