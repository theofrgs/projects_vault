import ProjectsCarousel from "@/components/projects-carousel";
import { getPoularProjects, getSearchProject } from "@/lib/getProjects";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { term: string };
};
async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  const searchProjects = await getSearchProject(termToUse);
  const popularProjects = await getPoularProjects();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42 ">
        <h1 className="text-6xl font-bold px-10">
          Result for &quot;{termToUse}&quot;
        </h1>
        <ProjectsCarousel
          title="Projects"
          projects={searchProjects}
          isVertical
        />
        <ProjectsCarousel
          title="You may also like"
          projects={popularProjects}
          isVertical
        />
      </div>
    </div>
  );
}

export default SearchPage;
