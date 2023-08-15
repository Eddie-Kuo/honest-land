"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";

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

  const mainText = {
    hidden: {
      opacity: 0,
      y: "50px",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 2.0,
        ease: "easeInOut",
      },
    },
  };

  const valuesContainer = {
    hidden: {
      opacity: 0,
      x: "-50px",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 2.5,
      },
    },
  };

  const valueItem = {
    hidden: {
      opacity: 0,
      x: "-30px",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scaleX: 0.5 },
    show: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.3,
        delay: 2.8,
        type: "tween",
      },
    },
  };

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
            variants={typingContainer}
          >
            {Array.from("Welcome").map((letter, index) => (
              <motion.span key={index} variants={typingText}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* to */}
          <motion.p
            className="font-serif text-sm"
            initial="hidden"
            animate="show"
            variants={smallText}
          >
            to
          </motion.p>

          {/* Main Text */}
          <motion.h2
            className="font-serif text-7xl"
            initial="hidden"
            animate="show"
            variants={mainText}
          >
            Honest Land
          </motion.h2>

          {/* Values */}
          <motion.div
            className=" relative flex gap-3"
            initial="hidden"
            animate="show"
            variants={valuesContainer}
          >
            <motion.p variants={valueItem}>Integrity</motion.p>
            <motion.div className="pt-1" variants={valueItem}>
              *
            </motion.div>
            <motion.p variants={valueItem}>Transparency</motion.p>
            <motion.div className="pt-1" variants={valueItem}>
              *
            </motion.div>
            <motion.p variants={valueItem}>Respect</motion.p>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            className="mt-2 rounded-md bg-zinc-900 p-2 text-white"
            initial="hidden"
            animate="show"
            variants={buttonAnimation}
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
