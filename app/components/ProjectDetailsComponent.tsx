import { useEffect, useRef, useState } from "react";
import { Project } from "../utils/datas";
import { useLoadingStore } from "../store/loadingStore";
import LoadingScreen from "./controlled/LoadingScreen";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import InIcon from "../_svgs/inIcon.svg";
import TwitterIcon from "../_svgs/xIcon.svg";
import InstagramIcon from "../_svgs/instagramIcon.svg";
import Accordion from "./controlled/Accordion";
import { items } from "./Process";
import SocialMediaLinks from "./SocialMediaLinks";
import Image from "next/image";
// gsap.registerPlugin(ScrollTrigger);

const ProjectDetails: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="max-w-screen   relative">
      <FirstSection project={project} />
      {/* <SecondSection project={project} /> */}
      <ThirdSection project={project} />
    </div>
  );
};

export default ProjectDetails;

const FirstSection = ({ project }: { project: Project }) => {
  const { isLoading } = useLoadingStore();
  const textRef = useRef<HTMLParagraphElement>(null);
  const listRef1 = useRef<HTMLDivElement | null>(null);
  const listRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isLoading) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "bounce.out" }
      );

      if (listRef1.current) {
        gsap.fromTo(
          Array.from(listRef1.current.children),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
      }

      if (listRef2.current) {
        gsap.fromTo(
          Array.from(listRef2.current.children),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.4,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
      }
    }
  }, [isLoading]);
  return (
    <div className=" top-0 md:mt-20 mt-10 left-0 z-1000 px-3 lg:px-0 w-screen text-white lg:py-30 py-10 bg-primary">
      {/* {isLoading ? (
        <LoadingScreen />
      ) : ( */}
        <>
          <p
            ref={textRef}
            className="lg:text-7xl text-3xl py-3 flex flex-col font-bold text-center"
          >
            Unique visual identity to<span>bring in digital market</span>
          </p>
          <div
            ref={listRef1}
            className="flex flex-col max-w-7xl text-center mx-auto"
          >
            <div className=" flex md:flex-row flex-col mt-3   md:justify-between lg:text-lg lg:pt-20 text-gray-400 md:mt-5">
              {project?.categoryLabel?.map((label, index) => (
                <div key={index} className="pb-6  mx-auto">
                  <p className="mt-2">{label}</p>
                  <div
                    className="flex justify-around items-center font-bold lg:text-[22px] lg:pt-3 text-white"
                    ref={listRef2}
                  >
                    {project.categoryList?.map(
                      (categoryItem, itemIndex) =>
                        index === itemIndex && (
                          <p className="text-white mt-2 md:mt-0 w-40 md:w-64" key={itemIndex}>
                            {categoryItem}
                          </p>
                        )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <ul
            ref={listRef1}
            className="flex justify-around lg:text-2xl lg:pt-20  text-gray-400 "
          >
            {project.categoryLabel?.map((label, index) => (
              <li className="bg-red-500" key={index}>
                {label}
              </li>
            ))}
          </ul> */}
          {/* <ul ref={listRef2} className="flex justify-around lg:text-2xl pt-5  ">
            {project.categoryList?.map((list, index) => (
              <li className="" key={index}>
                {list}
              </li>
            ))}
          </ul> */}
        </>
      {/* )} */}
    </div>
  );
};

const SecondSection = ({ project }: { project: Project }) => {
  const [scrollY, setScrollY] = useState(0);
  console.log(project);
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky  left-0 top-0 z-10">
      <div className="px-5 mt-72 rounded-2xl overflow-hidden">
        <img
          src="https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//Headerrrrr.jpg"
          alt="Project Image"
          className="w-full lg:h-full object-cover rounded-2xl"
          style={{
            transform: `translate(0px, ${60 + scrollY * 0.2}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>
    </div>
  );
};

const ThirdSection = ({ project }: { project: Project }) => {
  return (
    <div className="red-div w-screen  bottom-0 left-0 z-50 flex flex-col text-white">
      <div className="lg:max-w-7xl w-full mx-auto py-0 px-3 lg:px-0">
        {/* IMAGES WITH SCROLL ANIMATION */}
        <div className="flex flex-col mt-0 max-w-8xl overflow-hidden">
          {project?.images?.map((image, index) => (
            <img
              key={index}
              // ref={(el) => {(imageRefs.current[index] = el)}}
              className="w-full object-cover"
              src={image}
              alt={`Project ${project?.title}`}
            />
          ))}
        </div>

        <div className="mt-14">
          <hr />
        </div>
        <hr />
        <div className="w-fit relative p-10 mx-auto mt-10">
          <p className="flex flex-col text-center lg:text-8xl text-2xl font-bold ">
            LET'S MAKE<span>SOMETHING GREAT!</span>
          </p>
          <span className="lg:w-44 lg:h-44 w-20 h-20 text-black lg:text-3xl text-sm font-bold p-4 rounded-full bg-[#d0ff71] absolute right-0 lg:top-0 top-1 z-1000 text-center flex justify-center items-center">
            CONTACT US
          </span>
        </div>
        <Footer />
        <hr />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 md:mb-20 mb-10 md:mt-10  text-white">
      <div className="flex flex-wrap  justify-between md:mt-10 w-full px-3 lg:px-0">
        <p className="text-3xl font-bold mb-5 md:mb-0">Lorik Zekaj</p>
        <div className="flex gap-x-16 lg:mr-10">
          <p className="flex flex-col text-sm lg:max-w-xs text-customGrayColor">
            LOACATION
            <span className="text-base mt-2 ">
              Prishtina, Kosova
              <br />
              (Southeast Europe)
            </span>
          </p>
          <p className="flex flex-col text-sm lg:max-w-xs text-customGrayColor">
            INQUIRY
            <span className="text-base mt-2">
              lorikzek@gmail.com <br /> +383-49-828-434
            </span>
          </p>
        </div>
      </div>
      <div className="mt-14">
        <SocialMediaLinks />
      </div>
    </div>
  );
};
