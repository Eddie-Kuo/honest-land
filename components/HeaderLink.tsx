"use client";

import Link from "next/link";

interface HeaderLinkProps {
  location: string;
  name: string;
}

export default function HeaderLink({ location, name }: HeaderLinkProps) {
  return (
    <Link href={location} className="text-xl font-light text-zinc-700">
      {name}
    </Link>
  );
}
