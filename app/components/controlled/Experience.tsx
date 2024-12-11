import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface ExperienceProps {
  id: number; // Change from `key` to `id` or another suitable name
  image: string | StaticImport;
  companyName: string;
  position: string;
  periodTime: string;
  className: string;
}

export const Experience = ({
  id,
  image,
  companyName,
  position,
  periodTime,
  className,
}: ExperienceProps) => {
  return (
    <div className={className}>
      <div className="flex gap-x-3">
        <Image
          src={image}
          className="rounded-full cursor-pointer object-contain"
          alt={companyName}
          height={48}
          width={48}
        />
        <div className="flex flex-col gap-y-1">
          <p>{companyName}</p>
          <p className="text-xs text-gray-400">{position}</p>
        </div>
      </div>
      <div className="flex md:w-6/12 items-start mt-2 md:mt-0">
        <p className="md:text-2xl text-lg">{periodTime}</p>
      </div>
    </div>
  );
};
