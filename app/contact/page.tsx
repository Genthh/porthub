"use client";
import SmoothScroll from "@/app/components/controlled/SmoothScroll";
import React, { use } from "react";
import Contact from "../components/Contact";
import { Navbar } from "../components/Navbar";

const SmoothScrollingWrapper = () => {
  return (
    <div className="mx-auto  flex flex-col items-center justify-center relative">
      <SmoothScroll>

        <Contact  />
      </SmoothScroll>
     </div>
  );
};
const Page = () => {
  return (
    <div className="mx-auto max-w-8xl flex flex-col justify-center relative">
      <Navbar/>
      <SmoothScrollingWrapper />
    </div>
  );
};
export default Page;
