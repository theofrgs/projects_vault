import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Project } from "@/typings";
import Image from "next/image";
import ProjectTags from "./project-tags";
import Link from "next/link";
import GalleryDialog from "./gallery-dialog";
import { FaPlay } from "react-icons/fa";

type Props = { children: React.ReactNode; project: Project };

function ProjectDialog({ children, project }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-[1000px] p-0 bg-[#1A1C29] overflow-y-auto max-h-screen mx-10 my-10 select-none">
        <div className="overflow-hidden relative">
          <div className="flex">
            <div className="flex-full relative max-h-screen bg-red-500">
              <Image
                src={`/assets/imgs/${project.background}`}
                className="w-full object-cover h-[40rem]"
                alt={"project.background"}
                width={1920}
                height={1080}
              />
              <div className="hidden lg:inline absolute mt-0 top-0 z-20 pt-[450px] left-0 bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
                <h2 className="text-5xl font-bold max-w-xl z-50">
                  {project.title}
                </h2>
                {project.date && <p className="italic">{project.date}</p>}
                {project.url && (
                  <div>
                    <div
                      className={`animate-pulse rounded-full bg-green-600 w-[1.5vh] h-[1.5vh]`}
                    />
                    <Link href={project.url}>{project.url}</Link>
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
              <p className="">{project.description}</p>
            </div>
            <div className="w-1/3 overflow-auto">
              <ProjectTags project={project} expanded={true} />
            </div>
          </div>
          {/* Features */}
          <div className="pt-10 cursor-pointer select-none">
            <h1 className="text-3xl font-semibold mb-4">Features</h1>
            {project.features?.map((feature, key) => (
              <div key={key} className="flex gap-2">
                <Link href={feature.video} passHref>
                  <Image
                    src={feature.video}
                    alt="YouTube Preview"
                    width={1920 / 4}
                    height={1080 / 4}
                    className="cursor-pointer rounded-[20px] p-2 h-32 w-32 object-cover"
                  />
                </Link>
                <div className="flex flex-col gap-2 py-2">
                  <h2 className="text-xl font-bold max-w-xl z-50">
                    {feature.title}
                  </h2>
                  <p className="max-w-xl text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Gallery */}
          <div className="pb-20">
            <h1 className="text-3xl font-semibold mb-4">Gallery</h1>
            <div className="gap-4 grid grid-cols-4 overflow-auto flex-wrap">
              {project.imgs?.map((img, key) => (
                <GalleryDialog imgs={project.imgs} index={key} key={key}>
                  <div className="flex justify-center">
                    <Image
                      src={`/assets/imgs/${img}`}
                      alt="Main app icon"
                      width={1920 / 4}
                      height={1080 / 4}
                      className="cursor-pointer rounded-[20px] p-2 h-32 w-32 object-cover"
                    />
                  </div>
                </GalleryDialog>
              ))}
            </div>
            <div
              className="gap-4 grid grid-cols-4  mt-10  overflow-auto flex-wrap"
              style={{ overflowY: "auto" }}
            >
              {project.videos?.map((video, key) => (
                <Link href={video} passHref key={key}>
                  <div className="flex justify-center relative">
                    <Image
                      // TODO should be preview
                      src={`/assets/imgs/${project.background}`}
                      alt="YouTube Preview"
                      width={1920 / 4}
                      height={1080 / 4}
                      className="cursor-pointer rounded-[20px] p-2 h-32 w-32 object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="rounded-xl bg-gray-900/50 p-2">
                        <FaPlay color="red" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default ProjectDialog;
