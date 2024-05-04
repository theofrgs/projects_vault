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
import Link from "next/link";

type Props = { children: React.ReactNode; project: Project };

async function ProjectDialog({ children, project }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-[1000px] p-0 bg-[#1A1C29] overflow-y-auto max-h-screen mx-10 my-10">
        <div className="overflow-hidden relative">
          <div className="flex">
            <div className="flex-full relative max-h-screen bg-red-500">
              <Image
                src={`/assets/imgs/${project.background}`}
                className="w-full object-cover h-[40rem]"
                alt={""}
                width={1920}
                height={1080}
              />
              <div className="hidden lg:inline absolute mt-0 top-0 z-20 pt-[450px] left-0 bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
                <h2 className="text-5xl font-bold max-w-xl z-50">
                  {project.title}
                </h2>
                {project.url && (
                  <div>
                    <div
                      className={`animate-pulse rounded-full bg-green-600 w-[1.5vh] h-[1.5vh]`}
                    />
                    <Link href={"online"}>{project.url}</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
          </div>
        </div>
        <div className="z-20 h-full w-full px-10 space-y-5 text-white">
          <div className="flex flex-row justify-between max-h-24">
            <div className="max-w-xl">
              <p className="line-clamp-3">{project.description}</p>
            </div>
            <div className="w-1/3 overflow-auto">
              <ProjectTags project={project} expanded={true} />
            </div>
          </div>
          {/* Features */}
          <div className="pt-10">
            <h1 className="text-3xl font-semibold mb-4">Features</h1>
            {project.features?.map((feature, key) => (
              <div key={key} className="flex gap-2">
                <Image
                  src={`/assets/imgs/${feature.videos}`}
                  alt="Main app icon"
                  width={1920 / 4}
                  height={1080 / 4}
                  className="cursor-pointer rounded-[20px] p-2 h-32 w-32 object-cover"
                />
                <div className="flex flex-col gap-2 py-2">
                  <h2 className="text-xl font-bold max-w-xl z-50">
                    {feature.title}
                  </h2>
                  <p className="max-w-xl text-sm line-clamp-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Gallery */}
          <div className="py-10">
            <h1 className="text-3xl font-semibold mb-4">Gallery</h1>
            <div
              className="flex gap-4 justify-between overflow-auto flex-wrap"
              style={{ overflowY: "auto" }}
            >
              {project.imgs?.map((img, key) => (
                <Image
                  key={key}
                  src={`/assets/imgs/${img}`}
                  alt="Main app icon"
                  width={1920 / 4}
                  height={1080 / 4}
                  className="cursor-pointer rounded-[20px] p-2 h-32 w-32 object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default ProjectDialog;
