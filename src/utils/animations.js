// Stagger configuration for parent containers (e.g. grids)
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Child item animation (strictly GPU accelerated properties: y, scale, opacity)
export const slideUpItem = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15,
      mass: 0.8
    }
  }
};

export const heroAnimation = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15,
      mass: 0.8
    }
  }
};
