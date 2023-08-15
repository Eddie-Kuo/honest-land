"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const smallText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="z-10 flex flex-col items-center gap-2">
          <motion.h1
            className="font-serif text-6xl font-medium"
            initial="hidden"
            animate="show"
            variants={typingContainer}
          >
            {Array.from("Welcome").map((letter, index) => (
              <motion.span key={index} variants={typingText}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="font-serif text-sm"
            initial="hidden"
            animate="show"
            variants={smallText}
          >
            to
          </motion.p>

          <h2 className="font-serif text-7xl">Honest Land</h2>
          <div className=" relative flex gap-3">
            <p>Integrity</p>
            <div className="pt-1">*</div>
            <p>Transparency</p>
            <div className="pt-1">*</div>
            <p>Respect</p>
          </div>
          <button className="mt-2 rounded-md bg-zinc-900 p-2 text-white">
            Sell us Your Land
          </button>
        </div>
        <Image
          src="/assets/pexels-landscape.jpg"
          fill
          className="absolute overflow-y-hidden object-cover"
          alt="Landing page bg-photo"
        />
      </div>
    </main>
  );
}
