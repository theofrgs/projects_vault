import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "@/typings";
import Image from "next/image";
import ProjectTags from "./project-tags";

type Props = { children: React.ReactNode; project: Project };

async function ProjectDialog({ children, project }: Props) {
  console.log("🚀 ~ ProjectDialog ~ project:", project);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-[1000px] p-0 mt-10 bg-[#1A1C29]">
        <div className="overflow-hidden relative cursor-pointer">
          <div className="flex">
            <div className="flex-full relative max-h-screen">
              <Image
                src={`/assets/imgs/${project.background}`}
                className="w-full object-cover h-[40rem]"
                alt={""}
                width={1920}
                height={1080}
              />
              <div className="hidden lg:inline absolute mt-0 top-0 z-20 pt-96 left-0 bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
                <h2 className="text-5xl font-bold max-w-xl z-50">
                  {project.title}
                </h2>
                <p className="max-w-xl line-clamp-3">{project.description}</p>
                <ProjectTags project={project}/>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
          </div>
        </div>
        <div>
          Features
          {}
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default ProjectDialog;
