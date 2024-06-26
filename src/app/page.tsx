import CarouselBanner from "@/components/carousel-banner";
import ProjectsCarousel from "@/components/projects-carousel";
import { parseProjectsData } from "@/lib/parse-projects-data";

export default async function Home() {
  const projects = parseProjectsData();
  const folders: string[] = projects.reduce(
    (folders: string[], project) =>
      project.folder && folders.indexOf(project.folder) === -1
        ? [...folders, project.folder]
        : folders,
    []
  );

  return (
    <main>
      <CarouselBanner projects={projects} />
      <div className="flex flex-col mx-2 h-lg:-mt-28 -mt-14 h-lg:xl:-mt-40 h-xl:-mt-64">
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
