import React from "react";
import ProjectCard from "./project-card";
import { cn } from "@/lib/utils";
import { Project } from "@/typings";

type Props = {
  title?: string;
  projects: Project[];
  isVertical?: boolean;
};
function ProjectsCarousel({ title, projects, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
          isVertical && "flex flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? projects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <ProjectCard project={project} />
                <div className="max-w-2xl">
                  <p className="font-bold">{project.title}</p>
                  <hr className="mb-3" />
                  <p>{project.description}</p>
                </div>
              </div>
            ))
          : projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
      </div>
    </div>
  );
}

export default ProjectsCarousel;
