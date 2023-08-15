"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import { motion } from "framer-motion";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const headerLeft = {
    hidden: { x: -100, opacity: 0, scale: 0.75 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };
  const headerRight = {
    hidden: { x: 100, opacity: 0, scale: 0.75 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  return (
    <nav className="fixed top-0 z-30 flex w-full max-w-7xl items-center justify-between py-2 md:px-10">
      <motion.div initial="hidden" animate="show" variants={headerLeft}>
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
      </motion.div>
      <motion.div
        className="flex items-center gap-10 pr-2"
        initial="hidden"
        animate="show"
        variants={headerRight}
      >
        <HeaderLink location={"/"} name="Home" />
        <HeaderLink location="/about" name="About" />
        <HeaderLink location="/contact" name="Contact" />
      </motion.div>
    </nav>
  );
}
