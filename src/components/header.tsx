import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ThemeToggler } from "./theme-toggler";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

function Header() {
  return (
    <header className="fixed w-full z-40 top-0 items-center flex justify-between bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 p-5">
      <Link href={"https://www.linkedin.com/in/theo-fargeas-127046197"}>
        <Image
          src="/assets/imgs/profil_picture.jpg"
          alt="Main app icon"
          width={120}
          height={100}
          className="w-[120px] h-[120px] object-cover object-[50%_35%] cursor-pointer rounded-[120px] p-2"
        />
      </Link>
      <div className="flex space-x-2">
        {/* <ThemeToggler /> */}
        <Link href="https://github.com/theofrgs">
          <Button
            variant={"outline"}
            size="icon"
            className="p-1 h-8 w-8 md:w-10 md:h-10"
          >
            <AiFillGithub className="h-full w-full" color="white" />
          </Button>
        </Link>
        <Link href="https://www.malt.fr/profile/theofargeas?overview">
          <Button
            variant={"outline"}
            size="icon"
            className="p-1 h-8 w-8 md:w-10 md:h-10"
          >
            <Image
              src="/assets/imgs/malt-icon.png"
              alt="Malt icon"
              width={800}
              height={800}
              className="h-full w-full"
            />
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
