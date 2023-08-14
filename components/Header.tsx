"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-yellow-200/30 px-3 py-2 ">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/sunflower.png"
          width={100}
          height={100}
          alt="Logo"
        />
        <p className="text-yl text-2xl font-light text-yellow-500 max-sm:hidden">
          HONEST <br />
          LAND
        </p>
      </Link>
      <div className="flex items-center gap-6 pr-2">
        <HeaderLink location={"/"} name="Home" />
        <HeaderLink location="/about" name="About" />
        <HeaderLink location="/contact" name="Contact" />
      </div>
    </nav>
  );
}
