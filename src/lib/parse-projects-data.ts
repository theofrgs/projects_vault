import { Project } from "@/typings";
import fs from "fs";

export function parseProjectsData(): Project[] {
  const filePath = "./projects.json";

  return JSON.parse(fs.readFileSync(filePath, "utf8")).projects;
}
