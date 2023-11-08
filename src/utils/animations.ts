export const bounceAnimation = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export const linkAnimation = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 5,
    },
  },
};

export const staggeredAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const staggeredAnimationFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const menuItemAnimation = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const navigationAnimation = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const sidebarAnimation = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
