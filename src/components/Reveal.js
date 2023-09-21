import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MyComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: .7,   // When 20% of the component is in the viewport, trigger the animation
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationTransition = {
    duration: 1,
  };

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={animationVariants}
      transition={animationTransition}
    >
      {children}
    </motion.div>
  );
};

export default MyComponent;
