"use client";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-yellow-200/30 px-6 py-3 ">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/sunflower.png"
          width={150}
          height={100}
          alt="Logo"
        />
        <p className="text-yl text-2xl font-light text-yellow-500 max-sm:hidden">
          HONEST <br />
          LAND
        </p>
      </Link>
    </nav>
  );
}
