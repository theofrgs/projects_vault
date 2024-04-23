import React, { MouseEventHandler } from "react";
import Image from "next/image";
import ProjectDialog from "./project-dialog";
import { Project } from "@/typings";
import ProjectTags from "./project-tags";
import { TagVariant } from "./tag";

function ProjectCard({ project }: { project: Project }) {
  return (
    <ProjectDialog project={project}>
      <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
        <div className="absolute z-20 bottom-5 left-5 flex flex-col gap-2">
          <h2 className="font-semibold">{project.title}</h2>
          <ProjectTags project={project} variant={TagVariant.S} />
        </div>
        <Image
          className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
          src={`/assets/imgs/${project.background}`}
          alt={project.title}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
      </div>
    </ProjectDialog>
  );
}

export default ProjectCard;
