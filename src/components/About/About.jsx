import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MediaQuery from "react-responsive";
import NumbersDataDesktop from "./components/NumbersDataDesktop";
import NumbersDataMobile from "./components/NumbersDataMobile";

const About = () => {
  const [headingRef, headingInView] = useInView({
    threshold: 0.2,
  });
  const headingAnimation = useAnimation();

  const [infoRef, infoInView] = useInView({
    threshold: 0.2,
  });
  const infoAnimation = useAnimation();

  const [numbersRef, numbersInView] = useInView({
    threshold: 0.2,
  });
  const numbersAnimation = useAnimation();

  const aboutVariants = {
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

  useEffect(() => {
    if (infoInView) {
      infoAnimation.start("visible");
    } else {
      infoAnimation.start("hidden");
    }
  }, [infoInView, infoAnimation]);

  useEffect(() => {
    if (numbersInView) {
      numbersAnimation.start("visible");
    } else {
      numbersAnimation.start("hidden");
    }
  }, [numbersInView, numbersAnimation]);

  return (
    <div name="About" id="About" className="text-white bg-black">
      <motion.h1
        ref={headingRef}
        initial="hidden"
        animate={headingAnimation}
        variants={headingVariants}
        className="text-2xl md:text-4xl pt-8 md:pt-24 text-center font-lovelo"
      >
        About E-Summit'22
      </motion.h1>

      <motion.p
        ref={infoRef}
        initial="hidden"
        animate={infoAnimation}
        variants={aboutVariants}
        className="text-base md:text-2xl font-light text-center py-2 md:py-8 w-11/12 md:w-2/4 mx-auto color-primary"
      >
        BSU Academic Summit is an annual conference where educators under the
        BSU umbrella can share their knowledge, learn, and empower each other.
      </motion.p>

      <MediaQuery minWidth={769}>
        <NumbersDataDesktop
          numbersRef={numbersRef}
          numbersAnimation={numbersAnimation}
          aboutVariants={aboutVariants}
          numbersInView={numbersInView}
        />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <NumbersDataMobile
          numbersRef={numbersRef}
          numbersAnimation={numbersAnimation}
          aboutVariants={aboutVariants}
          numbersInView={numbersInView}
        />
      </MediaQuery>
    </div>
  );
};

export default About;
