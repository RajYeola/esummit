import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import workshop1 from "../../assets/workshop1.jpeg";
import workshop2 from "../../assets/workshop2.jpeg";
import WorkshopImage from "./components/WorkshopImage";

const Workshops = () => {
  const [headingRef, headingInView] = useInView({
    threshold: 0.2,
  });
  const headingAnimation = useAnimation();

  const headingVariants = {
    hidden: {
      scale: 0.1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (headingInView) {
      headingAnimation.start("visible");
    } else {
      headingAnimation.start("hidden");
    }
  }, [headingInView, headingAnimation]);

  return (
    <div name="Workshops" id="Workshops" className="bg-black">
      <motion.h1
        className="text-white text-center text-2xl md:text-4xl pt-8 md:pt-24 pb-4 md:pb-8 font-lovelo"
        ref={headingRef}
        initial="hidden"
        animate={headingAnimation}
        variants={headingVariants}
      >
        Workshops
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-around">
        <WorkshopImage imgSrc={workshop1} />
        <WorkshopImage imgSrc={workshop2} />
      </div>
    </div>
  );
};

export default Workshops;
