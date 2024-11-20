import { useEffect, useState } from "react";
import { Project } from "../utils/ProjectsData";

const ProjectDetails: React.FC<{ project: Project }> = ({ project }) => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="max-w-screen lg:h-[480vh]   relative">
      <FirstSection />
      <SecondSection />
      <ThirdSection project={project} />
    </div>
  );
};

export default ProjectDetails;

const FirstSection = () => {
  return (
    <div className="absolute top-0 left-0 z-1000 w-screen text-white lg:py-20    py-10 bg-primary  ">
      <p className="md:text-xl text-center">
        Brand identity and web developmentBrand identity and web development
      </p>
      <p className="lg:text-7xl text-2xl py-3 flex flex-col font-bold  text-center">
        Unique visual identity to<span>bring in digital market</span>
      </p>
      <ul className="flex justify-around lg:text-2xl lg:pt-20 mx-20 text-gray-400">
        <li>Category</li>
        <li>Client</li>
        <li>Start Date</li>
        <li>Designer</li>
      </ul>
      <ul className="flex justify-around lg:text-2xl pt-5 lg:mx-20 ">
        <li>Development</li>
        <li>Envato</li>
        <li>7 August 2021</li>
        <li>Ui-ThemeZ</li>
      </ul>
    </div>
  );
};

const SecondSection = () => {
  const [scrollY, setScrollY] = useState(0);

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
    <div className="w-screen sticky  left-0 top-0 z-10">
      <div className="px-5 rounded-2xl overflow-hidden">
        <img
          src="/img-detaisl.jpg"
          alt="Project Image"
          className="w-full lg:h-full h-[600px] object-cover rounded-2xl"
          style={{
            transform: `translate(0px, ${120 + scrollY * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
    </div>
  );
};

const ThirdSection = ({ project }: { project: Project }) => {
  const imageUrl = project?.images?.[0] || "/img-2.jpg";
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
            <p className="text-xl font-bold border-b border-gray-600 pb-2">
              Research
            </p>
            <p className="text-xl font-bold border-b border-gray-600 pb-2">
              Websites and digital platforms
            </p>
            <p className="text-xl font-bold border-b border-gray-600 pb-2">
              Websites and digital platforms
            </p>
            <p className="text-xl font-bold">
              Content strategy for social media
            </p>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 mt-20 ">
      <div className="w-fit relative p-10 ">
        <p className="flex flex-col text-center lg:text-8xl text-3xl font-bold">
          LET'S MAKE<span>SOMETHING GREAT!</span>
        </p>
        <span className="lg:w-44 lg:h-44 w-20 h-20 text-black lg:text-3xl text-sm font-bold p-4 rounded-full bg-[#d0ff71] absolute right-0 lg:top-0 top-3 z-1000 text-center flex justify-center items-center">
          CONTACT US
        </span>
      </div>
    </div>
  );
};
