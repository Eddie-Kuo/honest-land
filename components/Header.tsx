"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <nav className="fixed top-0 z-30 flex w-full max-w-6xl items-center justify-between px-3 py-4 md:px-10">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/sunflower.png"
          width={100}
          height={100}
          alt="Logo"
        />
        <p className=" text-2xl font-light tracking-widest text-yellow-500 max-sm:hidden">
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
