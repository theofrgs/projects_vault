"use client";

import { Project } from "@/typings";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import ProjectDialog from "./project-dialog";

type Props = {
  projects: Project[];
};
Autoplay.globalOptions = { delay: 8000 };

const CarouselBanner = ({ projects }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div ref={emblaRef} className="overflow-hidden relative cursor-pointer">
      <div className="flex">
        {projects.map((project, index) => (
          // <ProjectDialog project={project} key={index}>
            <div className="flex-full relative max-h-screen" key={index}>
              <Image
                src={`/assets/imgs/${project.background}`}
                className="w-full"
                alt={""}
                width={1920}
                height={1080}
              />
              <div className="hidden lg:inline absolute mt-0 top-0 z-20 pt-80 lg:pt-96 left-0  bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
                <h2 className="text-5xl font-bold max-w-xl z-50">
                  {project.title}
                </h2>
                <p className="max-w-xl line-clamp-3">{project.description}</p>
                {/* TODO error handler IDK WHY if i use it use client fails */}
                {/* <ProjectTags project={project} variant={TagVariant.L} /> */}

                {/* Put this inside component */}
                <div className="flex flex-wrap gap-2 max-w-xl max-h-64 overflow-auto">
                  {project.tags.map((tag, key) => (
                    // Put this in another component ?
                    <Card key={key} className={`px-6 py-2 rounded-xl`}>
                      <p className={`text-lg`}>{tag}</p>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
            </div>
          {/* </ProjectDialog> */}
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
