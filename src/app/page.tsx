import CarouselBannerWrapper from "@/components/carousel-banner-wrapper";
import ProjectsCarousel from "@/components/projects-carousel";
import { parseProjectsData } from "@/lib/parse-projects-data";

export default async function Home() {
  const projects = parseProjectsData();
  console.log("🚀 ~ Home ~ projects:", projects)
  const folders: string[] = projects.reduce(
    (folders: string[], project) =>
      project.folder && folders.indexOf(project.folder) === -1
        ? [...folders, project.folder]
        : folders,
    []
  );

  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-x-2 xl:-mt-48 md:-mt-24 pb-10">
        {folders.map((folder, index) => (
          <ProjectsCarousel
            key={index}
            projects={projects.filter((p) => p.folder === folder)}
            title={folder}
          />
        ))}
      </div>
    </main>
  );
}
