import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { CSSProperties } from "react";

interface MainLayoutProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string | StaticImport;
  positionClasses?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}

interface SecondaryLayoutProps {
  description: string;
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  subtitle,
  imageSrc,
  positionClasses = "",
  children,
  style,
}) => (
  <div className="flex relative flex-col lg:flex-row mx-3 lg:mx-0 lg:w-[63%] w-full rounded-2xl overflow-hidden shadow-lg">
    <div
      className="relative w-full md:min-h-[800px] min-h-[650px] backgroundGradient px-10"
      style={style}
    >
      <h1 className="lg:text-9xl md:text-7xl text-5xl mt-20 font-bold mb-4 md:mt-10 text-white">
        {title}
      </h1>
      <p className="text-white mb-8 text-2xl flex flex-col z-20">{subtitle}</p>
      {imageSrc && (
        <div className={`bg-left-top bg-cover bg-no-repeat ${positionClasses}`}>
          <Image src={imageSrc} alt="empty" width={1500} height={1000} />
        </div>
      )}
      {children && <div className="absolute bottom-10">{children}</div>}
    </div>
  </div>
);

export const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({
  description,
  children,
}) => (
  <div className="flex flex-col md:flex-row rounded-2xl lg:h-[63%]  h-[470px] md:py-20 pb-48 pt-0 md:pb-0 md:pt-0  overflow-hidden shadow-lg bg-white px-3 lg:py-2 relative">
    <p className="text-[19.5px] px-3 font-semibold pt-5 lg:max-w-[100%]">
      {description}
    </p>
    {children}
  </div>
);
