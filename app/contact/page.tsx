"use client";
import SmoothScroll from "@/app/components/controlled/SmoothScroll";
import React, { use } from "react";
import Contact from "../components/Contact";

const Page = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center relative">
      <SmoothScroll maxWidth="100vw">
        <Contact />
      </SmoothScroll>
    </div>
  );
};
export default Page;
