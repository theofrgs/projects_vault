"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = { children: React.ReactNode; imgs: string[]; index: number };

function GalleryDialog({ children, imgs, index }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(index);

  const prevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-[1000px] p-0 bg-[#1A1C29] overflow-y-auto max-h-screen mx-10 my-10">
        <Image
          className="w-full object-cover h-[50rem]"
          src={`/assets/imgs/${imgs[selectedIndex]}`}
          alt="Selected Image"
          width={1920}
          height={1080}
        />
        <div className="flex absolute bottom-10 justify-center w-full gap-4 z-20">
          {index - 1 >= 0 && (
            <Button
              onClick={prevImage}
              size="lg"
              className="border border-white"
            >
              <FaChevronLeft />
            </Button>
          )}
          {index + 1 < imgs.length && (
            <Button
              onClick={nextImage}
              size="lg"
              className="border border-white"
            >
              <FaChevronRight />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default GalleryDialog;
