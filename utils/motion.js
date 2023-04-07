export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const heroVariants = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '120%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const heroTextVariant = (delay, direction) => ({
  hidden: {
    x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    // z: direction === 'left-right' ? 100 : direction === 'top-right' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y:0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});


export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const sentence = {
  hidden: {
    opacity: 1
  },
  show: {
    opacity: 1, 
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

export const letter = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
  },
};