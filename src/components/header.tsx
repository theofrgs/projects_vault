import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ThemeToggler } from "./theme-toggler";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="fixed w-full z-50 top-0 items-center flex justify-between bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 p-5">
      <Link href={"https://www.linkedin.com/in/theo-fargeas-127046197"}>
        <Image
          src="https://media.licdn.com/dms/image/D5603AQGfjxh6bt3R5g/profile-displayphoto-shrink_400_400/0/1680613624537?e=1717027200&v=beta&t=udteSDyw9nOF2nuULwJGefaeANQw5yAsVZKyYMcTXzI"
          alt="Main app icon"
          width={120}
          height={100}
          className="cursor-pointer rounded-[120px] p-2"
        />
      </Link>
      <div className="flex space-x-2">
        <ThemeToggler />
        <Link href="https://github.com/theofrgs">
          <Button variant="outline" size="icon" className="p-1">
            <AiFillGithub className="text-white h-full w-full" />
          </Button>
        </Link>
        <Link href="https://www.malt.fr/profile/theofargeas?overview">
          <Button variant="outline" size="icon" className="p-1">
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
