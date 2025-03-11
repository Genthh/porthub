import { useGSAP } from "@gsap/react";
import React from "react";
import { animateItems } from "./animations";
import { Experience } from "./controlled/Experience";
import { experience } from "../utils/datas";

const Reviews = () => {
  useGSAP(() => {
    animateItems(
      ".experience-item", 
      ".experience-container" 
    );
  }, []);

  return (
    <div className="lg:ml-[333px] lg:mr-[100px] mx-3 lg:mx-0 pb-14  md:px-10 px-3  bg-[#333333] relative rounded-2xl my-4 text-white experience-container">
      <div className="flex flex-wrap justify-between items-center mx-7 md:mx-0 border-b border-customColor md:py-14 py-7">
        <h2 className="text-5xl font-semibold lg:ml-2  tracking-tighter">
          Experience
        </h2>
        <p className="text-sm mt-5 mb-10 md:mt-0 md:mb-0  md:w-1/2 ">
        With years of expertise in branding and design, I craft visually compelling identities that leave a lasting impact.
        </p>
      </div>
      {experience.map((item) => (
        <Experience
          key={item.id}
          id={item.id} // Pass id as a prop explicitly if it's needed inside Experience
          image={item.image}
          companyName={item.companyName}
          position={item.position}
          periodTime={item.periodTime}
          className="flex md:flex-row mx-7 md:mx-0 flex-col justify-between items-start md:items-center border-b last:border-none border-customColor py-8 experience-item"
        />
      ))}
    </div>
  );
};

export default Reviews;
