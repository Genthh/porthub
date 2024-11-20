"use client";
import LoadingScreen from "@/app/components/LoadingScreen";
import ProjectDetailsComponent from "@/app/components/ProjectDetailsComponent";
import SmoothScroll from "@/app/components/smoothScroll/SmoothScroll";
import { projects } from "@/app/utils/ProjectsData";
import { useParams } from "next/navigation";
import React, { use } from "react";

const Page = () => {
  const { project_uuid } = useParams();
  const project = projects.find((proj) => proj.uuid === project_uuid);
  console.log(project);
  if (!project) {
    return <LoadingScreen />;
  }

  return (
    <div className="mx-auto flex flex-col items-center justify-center relative">
      <SmoothScroll maxWidth="100vw">
        <ProjectDetailsComponent project={project} />
      </SmoothScroll>
    </div>
  );
};
export default Page;
