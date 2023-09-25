import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkshopImage = ({ imgSrc }) => {
  const [workshopRef, workshopInView] = useInView();
  const workshopAnimation = useAnimation({
    threshold: 0.2,
  });

  const workshopVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (workshopInView) {
      workshopAnimation.start("visible");
    } else {
      workshopAnimation.start("hidden");
    }
  }, [workshopInView, workshopAnimation]);

  return (
    <a href="https://google.com">
      <motion.img
        src={imgSrc}
        alt="Workshop"
        className="w-56 h-56 md:w-96 md:h-96 my-4 md:my-0 rounded-2xl cursor-pointer"
        ref={workshopRef}
        initial="hidden"
        animate={workshopAnimation}
        variants={workshopVariants}
      />
    </a>
  );
};

export default WorkshopImage;
