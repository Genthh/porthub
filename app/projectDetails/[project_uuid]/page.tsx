"use client";
import LoadingScreen from "@/app/components/controlled/LoadingScreen";
import ProjectDetailsComponent from "@/app/components/ProjectDetailsComponent";
import SmoothScroll from "@/app/components/controlled/SmoothScroll";
import { Project, projects } from "@/app/utils/datas";
import { useParams } from "next/navigation";
import React, { use } from "react";

const Page = () => {
  const { project_uuid } = useParams();
  const project = projects.find(
    (proj) => proj.uuid === project_uuid
  ) as Project;
  console.log(project);

  return (
    <div className="mx-auto flex flex-col items-center justify-center relative">
      <SmoothScroll maxWidth="100vw">
        <ProjectDetailsComponent project={project} />
      </SmoothScroll>
    </div>
  );
};
export default Page;
