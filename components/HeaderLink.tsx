"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface HeaderLinkProps {
  location: string;
  name: string;
  variant?: any;
}

export default function HeaderLink({
  location,
  name,
  variant,
}: HeaderLinkProps) {
  const pathname = usePathname();

  return (
    <motion.div variants={variant}>
      <Link
        href={location}
        className="group relative text-xl font-light tracking-wide text-zinc-800"
      >
        {name}
        <span
          className={`ease absolute -bottom-0.5 left-0 inline-block h-[1.5px] bg-zinc-900 transition-[width] duration-200 group-hover:w-full
        ${pathname === location && name === "Home" ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    </motion.div>
  );
}
