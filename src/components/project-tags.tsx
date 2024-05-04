import { Project } from "@/typings";
import React from "react";
import Tag, { TagVariant } from "./tag";

type Props = { project: Project; variant?: TagVariant; expanded?: boolean };

function ProjectTags({ project, variant, expanded = false }: Props) {
  return (
    <div
      className={`w-full flex gap-${variant === TagVariant.L ? "2" : "1"} ${
        expanded ? "flex-wrap" : "overflow-x-auto"
      }`}
    >
      {project.tags.map((tag, key) => (
        <Tag title={tag} key={key} variant={variant} />
      ))}
    </div>
  );
}

export default ProjectTags;
