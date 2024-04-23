import { Project } from "@/typings";
import React from "react";
import Tag, { TagVariant } from "./tag";

type Props = { project: Project; variant?: TagVariant };

function ProjectTags({ project, variant }: Props) {
  return (
    <div className="flex gap-2">
      {project.tags.map((tag, key) => (
        <Tag title={tag} key={key} variant={variant} />
      ))}
    </div>
  );
}

export default ProjectTags;
