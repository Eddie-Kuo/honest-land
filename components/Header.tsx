"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import { motion } from "framer-motion";
import { framerVariants } from "@/constants/variants";
import { useState } from "react";
import MenuToggle from "./MenuToggle";
import AnimatedNav from "./AnimatedNav";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <nav className="fixed top-0 z-30 flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={framerVariants.headerLeft}
      >
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
        className="flex items-center gap-10 pr-2 max-sm:hidden"
        initial="hidden"
        animate="show"
        variants={framerVariants.headerRight}
      >
        <HeaderLink location="/" name="Home" />
        <HeaderLink location="/about" name="About" />
        <HeaderLink location="/contact" name="Contact" />
      </motion.div>

      {/* side menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="sm:hidden"
      >
        {isOpen && (
          <motion.div
            initial={{ x: "100%", y: "-100%" }}
            animate={{
              x: 0,
              y: 0,
            }}
            exit={{
              x: "100%",
              y: "-100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
            className="absolute right-0 top-0 flex h-[1000px] w-[300px] justify-center bg-white/90 pt-32"
          >
            <div className="flex flex-col items-center gap-10">
              <AnimatedNav location="/" name="Home" />
              <AnimatedNav location="/about" name="About" />
              <AnimatedNav location="/contact" name="Contact" />
            </div>
          </motion.div>
        )}
        <MenuToggle toggle={() => setIsOpen(!isOpen)} openMenu={isOpen} />
      </motion.div>
    </nav>
  );
}
