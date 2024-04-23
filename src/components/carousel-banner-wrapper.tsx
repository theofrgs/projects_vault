import React from "react";
import CarouselBanner from "./carousel-banner";
import { parseProjectsData } from "@/lib/parse-projects-data";

type Props = {
  id?: string;
  keywords?: string;
};
async function CarouselBannerWrapper({ id, keywords }: Props) {
  const projects = parseProjectsData().filter(p => p.bookmark);

  return (
    <div className="">
      <CarouselBanner projects={projects} />
    </div>
  );
}

export default CarouselBannerWrapper;
