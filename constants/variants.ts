export const framerVariants = {
  typingContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  typingText: {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  },
  smallText: {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  },
  mainText: {
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
  },
  valuesContainer: {
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
  },
  valueItem: {
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
  },
  buttonAnimation: {
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
  },
  headerLeft: {
    hidden: { x: -100, opacity: 0, scale: 0.75 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  },
  headerRight: {
    hidden: { x: 100, opacity: 0, scale: 0.75 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  },

  collapsibleNavItem: {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 0.75,
        ease: "easeInOut",
      },
    },
  },
};
