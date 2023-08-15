"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  location: string;
  name: string;
}

export default function HeaderLink({ location, name }: HeaderLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={location}
      className="group relative text-xl font-light tracking-wide text-zinc-800"
    >
      {name}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1.5px] bg-zinc-900 transition-[width] duration-200 group-hover:w-full
        ${pathname === location ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
}
