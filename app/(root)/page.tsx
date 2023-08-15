"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { framerVariants } from "@/constants/variants";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <Header />
        <div className="z-10 flex flex-col items-center gap-2">
          {/* Welcome */}
          <motion.h1
            className="font-serif text-6xl font-medium"
            initial="hidden"
            animate="show"
            variants={framerVariants.typingContainer}
          >
            {Array.from("Welcome").map((letter, index) => (
              <motion.span key={index} variants={framerVariants.typingText}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* to */}
          <motion.p
            className="font-serif text-sm"
            initial="hidden"
            animate="show"
            variants={framerVariants.smallText}
          >
            to
          </motion.p>

          {/* Main Text */}
          <motion.h2
            className="text-center font-serif text-7xl"
            initial="hidden"
            animate="show"
            variants={framerVariants.mainText}
          >
            Honest Land
          </motion.h2>

          {/* Values */}
          <motion.div
            className=" relative flex gap-3"
            initial="hidden"
            animate="show"
            variants={framerVariants.valuesContainer}
          >
            <motion.p variants={framerVariants.valueItem}>Integrity</motion.p>
            <motion.div className="pt-1" variants={framerVariants.valueItem}>
              *
            </motion.div>
            <motion.p variants={framerVariants.valueItem}>
              Transparency
            </motion.p>
            <motion.div className="pt-1" variants={framerVariants.valueItem}>
              *
            </motion.div>
            <motion.p variants={framerVariants.valueItem}>Respect</motion.p>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            className="mt-2 rounded-md bg-zinc-900 p-2 text-white"
            initial="hidden"
            animate="show"
            variants={framerVariants.buttonAnimation}
          >
            Sell us Your Land
          </motion.button>
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
