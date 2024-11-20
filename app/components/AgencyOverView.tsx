import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { slideInFromBottom } from "./animations";
import { useGSAP } from "@gsap/react";
import { Button } from "./controlled/Buttons";

const AgencyOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      slideInFromBottom(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="py-5 flex flex-wrap gap-x-2 lg:ml-80">
      <MainSection />
      <SideSection />
    </div>
  );
};

const MainSection = () => (
  <div className="flex flex-col lg:flex-row mx-3 lg:mx-0 lg:w-[65%] w-full rounded-xl overflow-hidden shadow-lg ">
    <div className="relative w-full h-[90vh] backgroundGradient px-10">
      <h1 className="lg:text-9xl md:text-7xl text-5xl mt-20 font-bold mb-4 md:mt-10 text-white">
        Brand and Design
      </h1>
      <p className="text-white mb-8 text-2xl flex flex-col z-20">
        Hubfolio, small agency <span>with big ideas</span>
      </p>
      <div className="absolute md:bottom-[-25%] bottom-[-60%] md:right-[-105%] right-[-300%] bg-left-top bg-cover bg-no-repeat">
        <Image
          src="/chess.png"
          alt="Agency Overview"
          width={1500}
          height={1500}
        />
      </div>
      <div className="flex absolute bottom-10 px-2 py-1 rounded-full backdrop-blur-3xl bg-white/10">
        4.9/5 Based on 24 reviews on Clutch
      </div>
    </div>
  </div>
);

const SideSection = () => (
  <div className="flex flex-col gap-y-2 mx-3 lg:mx-0 lg:mt-0 mt-2  lg:w-[31%] ">
    <SecondProject />
    <div className="flex flex-col lg:flex-row rounded-xl lg:h-[40%] h-[300px] shadow-lg bg-customRed px-3 py-2">
      hahahah
    </div>
  </div>
);

const SecondProject = () => (
  <div className="flex flex-col md:flex-row rounded-xl lg:h-3/5   py-20 overflow-hidden shadow-lg bg-white px-3 lg:py-2 relative">
    <p className="text-2xl font-bold  max-w-[70%] lg:max-w-[100%]">
      Based in Boston, MA. We're an agency focused on crafting experience design
      & development digital products.
    </p>
    <ActionButtons />
  </div>
);

const ActionButtons = () => (
  <div>
    <Button
      label="Branding"
      color="bg-gray-200"
      rotation="rotate-45"
      bottom="bottom-5"
      left="left-[-5%]"
    />
    <Button
      label="UI/UX Design"
      color="bg-customRed text-white"
      rotation="-rotate-45"
      bottom="bottom-14 "
      left="left-20"
    />
    <Button
      label="SEO Marketing"
      color="bg-gray-200 text-black"
      rotation="rotate-0"
      bottom="bottom-[-3%]"
      right="right-16"
    />
    <Button
      label="Motion"
      color="bg-black text-white"
      rotation="-rotate-12"
      bottom="bottom-0"
      right="right-0"
    />
  </div>
);

export default AgencyOverview;
