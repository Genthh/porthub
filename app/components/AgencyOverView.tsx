import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { slideInFromBottom } from "./animations";
import { useGSAP } from "@gsap/react";
import { Button } from "./controlled/Buttons";
import { MainLayout, SecondaryLayout } from "./controlled/Layouts";

const AgencyOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      slideInFromBottom(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="py-5  flex flex-wrap gap-x-2 lg:ml-80">
      <MainLayout
        title="Brand and Design"
        subtitle="Hubfolio, small agency with big ideas"
        imageSrc="/chess.png"
        positionClasses="absolute md:bottom-[-25%] bottom-[-60%] md:right-[-105%] right-[-300%]"
      >
        <div className="flex px-2 py-1 rounded-full backdrop-blur-3xl bg-white/10">
          4.9/5 Based on 24 reviews on Clutch
        </div>
      </MainLayout>
      <div className="flex flex-col gap-y-2 mx-3 lg:mx-0 lg:mt-0 mt-2 lg:w-[31%]">
        <SecondaryLayout description="Based in Boston, MA. We're an agency focused on crafting experience design & development digital products.">
          <ActionButtons />
        </SecondaryLayout>
        <div className="flex flex-col lg:flex-row rounded-xl lg:h-[40%] h-[300px] shadow-lg bg-customRed px-3 py-2">
          hahahah
        </div>
      </div>
    </div>
  );
};

export const ActionButtons = () => (
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
