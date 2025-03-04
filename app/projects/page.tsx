"use client";
import React from "react";
import AllProjects from "../components/AllProjects";
import SmoothScroll from "../components/controlled/SmoothScroll";
import CustomCursor from "../components/controlled/CustomCursor";
import { Navbar } from "../components/Navbar";

const SmoothScrollingWrapper = () => {
  return (
    <div className="">
      <SmoothScroll>
        <h1 className="md:text-7xl text-5xl font-bold text-center md:mt-14  py-10">Our Projects</h1>
        <AllProjects />
      </SmoothScroll>
    </div>
  );
};
const Home: React.FC = () => {
  return (
    <div className="mx-auto  max-w-7xl  flex flex-col  justify-center relative text-white min-h-screen">
      <Navbar/>
      <CustomCursor />
      <SmoothScrollingWrapper />
    </div>
  );
};

export default Home;
