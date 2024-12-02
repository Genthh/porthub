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

const ProjectDetails: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="max-w-screen lg:h-[400vh]   relative">
      <FirstSection />
      <SecondSection project={project} />
      <ThirdSection project={project} />
    </div>
  );
};

export default ProjectDetails;

const FirstSection = () => {
  const { isLoading } = useLoadingStore();
  const textRef = useRef<HTMLParagraphElement>(null);
  const listRef1 = useRef<HTMLUListElement | null>(null);
  const listRef2 = useRef<HTMLUListElement>(null);

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
    <div className="absolute top-0 left-0 z-1000 px-3 lg:px-0 w-screen text-white lg:py-30 py-10 bg-primary h-[55vh]">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <p ref={textRef} className="md:text-xl text-center">
            Brand identity and web developmentBrand identity and web development
          </p>
          <p
            ref={textRef}
            className="lg:text-7xl text-2xl py-3 flex flex-col font-bold text-center"
          >
            Unique visual identity to<span>bring in digital market</span>
          </p>
          <ul
            ref={listRef1}
            className="flex justify-around lg:text-2xl lg:pt-20 lg:mx-20 text-gray-400"
          >
            <li>Category</li>
            <li>Client</li>
            <li>Start Date</li>
            <li>Designer</li>
          </ul>
          <ul
            ref={listRef2}
            className="flex justify-around lg:text-2xl pt-5 lg:mx-20"
          >
            <li>Development</li>
            <li>Envato</li>
            <li>7 August 2021</li>
            <li>Ui-ThemeZ</li>
          </ul>
        </>
      )}
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
    <div className="w sticky  left-0 top-0 z-10">
      <div className="px-5 rounded-2xl overflow-hidden">
        <img
          src={project?.imgBanner}
          alt="Project Image"
          className="w-full lg:h-full h-[600px] object-cover rounded-2xl"
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
    <div className="red-div  w-screen bg-primary  bottom-0 left-0 z-50 flex flex-col  text-white ">
      <div className="lg:max-w-7xl w-full mx-auto py-10 px-3 lg:px-0">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-x-40">
          <p className="text-4xl font-bold">Brand overview</p>
          <div className="flex flex-col gap-y-5">
            <p className="text-gray-400 flex flex-col text-lg gap-y-5 max-w-4xl">
              Duis sed augue condimentum, blandit sapien in, accumsan eros.
              Curabitur sodales pulvinar libero et venenatis. Nullam eleifend
              risus a quam dictum auctor. Mauris at leo non dui euismod varius.
              Cras vel erat at est aliquam laoreet. Donec tincidunt, nunc eu
              gravida malesuada, tellus leo.
              <span>
                Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus
                felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis
                dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed
                magna accumsan neque fermentum laoreet. Ut nunc.
              </span>
            </p>
            <p className="text-xl font-bold border-b border-gray-600 pb-2">
              Branding and identity
            </p>
            <p className="text-xl font-bold border-b border-gray-600 pb-2">
              Websites and digital platforms
            </p>
            <p className="text-xl font-bold">
              Content strategy for social media
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-20">
          <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4">
            <img
              className="lg:w-1/2 lg:h-100 h-56 object-cover"
              src={project?.images?.[0]}
              alt={`Project ${project?.title}`}
            />
            <img
              className="lg:w-1/2 lg:h-100 h-56 object-cover"
              src={project?.images?.[1]}
              alt={`Project ${project.title}`}
            />
          </div>
          <img
            className="w-full lg:h-100 h-56 object-cover mt-4"
            src={project?.images?.[2]}
            alt={`Project ${project.title}`}
          />
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between  my-20">
          <p className="text-4xl py-3 flex flex-col font-bold  ">
            Product making for <span>friendly users</span>
            <span className="text-lg max-w-xl text-gray-300 mt-4">
              Duis sed augue condimentum, blandit sapien in, accumsan eros.
              Curabitur sodales pulvinar libero et venenatis. Nullam eleifend
              risus a quam dictum auctor. Mauris at leo non dui euismod varius.
              Cras vel erat at est aliquam laoreet.
            </span>
          </p>
          <div className="flex flex-col  lg:w-1/2 gap-y-4 mt-5">
            <Accordion
              items={items}
              activeBorderColor="#d0ff71"
              activeTitleColor="#d0ff71"
              contentColor="#ffffff"
            />
          </div>
        </div>
        <hr />
        <div className="w-fit relative p-10 mx-auto mt-20">
          <p className="flex flex-col text-center lg:text-8xl text-2xl font-bold ">
            LET'S MAKE<span>SOMETHING GREAT!</span>
          </p>
          <span className="lg:w-44 lg:h-44 w-20 h-20 text-black lg:text-3xl text-sm font-bold p-4 rounded-full bg-[#d0ff71] absolute right-0 lg:top-0 top-3 z-1000 text-center flex justify-center items-center">
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
    <div className="flex flex-col justify-center items-center gap-y-5 mb-20 mt-10  text-white">
      <div className="flex flex-wrap  justify-between mt-10 w-full px-3 lg:px-0">
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
      <div className="flex gap-x-6 mt-20">
        <span className="border border-customColor rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
          <InstagramIcon />
        </span>
        <span className="border border-customColor rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
          <TwitterIcon />
        </span>
        <span className="border border-customColor rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
          <InIcon />
        </span>
      </div>
    </div>
  );
};
