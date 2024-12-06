import { useGSAP } from "@gsap/react";
import React from "react";
import { animateItems } from "./animations";
import { Experience } from "./controlled/Experience";
import { experience } from "../utils/datas";

const Reviews = () => {
  useGSAP(() => {
    animateItems(
      ".experience-item", // Selector for the items
      ".experience-container" // Selector for the container
    );
  }, []);

  return (
    <div className="lg:ml-[320px] mx-3  md:py-20 py-5 md:px-10 px-3 lg:mx-0 bg-[#333333] relative rounded-2xl my-4 text-white experience-container">
      <div className="flex flex-col border-b border-customColor md:pb-10 pb-5">
        <h1 className="md:text-3xl text-2xl font-bold">Experience</h1>
      </div>
      {experience.map((index) => (
        <Experience
          id={index.id}
          image={index.image}
          companyName={index.companyName}
          position={index.position}
          periodTime={index.periodTime}
          className="flex md:flex-row flex-col justify-between items-start md:items-center border-b last:border-none border-customColor py-8 experience-item"
        />
      ))}
    </div>
  );
};

export default Reviews;
