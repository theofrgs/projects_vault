import React from "react";
import ProjectCard from "./project-card";
import { cn } from "@/lib/utils";
import { Project } from "@/typings";

type Props = {
  title?: string;
  projects: Project[];
};
function ProjectsCarousel({ title, projects }: Props) {
  return (
    <div className="z-20">
      <h2 className="text-base sm:text-xl font-bold px-5 lg:px-10 py-1 sm:py-2">{title}</h2>
      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10 py-2 sm:py-5 scrollbar-hide"
        )}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsCarousel;
