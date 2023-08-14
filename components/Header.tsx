"use client";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-slate-200 px-6 py-3 ">
      <Link href="/">
        <Image
          src="/assets/sunflower.png"
          width={100}
          height={100}
          alt="Logo"
        />
      </Link>
    </nav>
  );
}
