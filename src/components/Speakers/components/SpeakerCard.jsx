import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SpeakerCard = ({ id, name, designation, imgUrl }) => {
  const [speakerRef, speakerInView] = useInView();
  const speakerAnimation = useAnimation({
    threshold: 0.2,
  });

  const speakerVariants = {
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
    if (speakerInView) {
      speakerAnimation.start("visible");
    } else {
      speakerAnimation.start("hidden");
    }
  }, [speakerInView, speakerAnimation]);

  return (
    <motion.div
      ref={speakerRef}
      initial="hidden"
      animate={speakerAnimation}
      variants={speakerVariants}
      className="mx-auto my-1 md:mx-0"
      key={id}
    >
      <img className="mx-auto speaker-card-img" src={imgUrl} alt="Speaker" />
      <div className="my-2 py-2 text-white text-center border-primary border-y-2">
        <h2 className="text-xl md:text-2xl my-1">{name}</h2>
        <h3 className="text-lg md:text-xl my-1">{designation}</h3>
      </div>
    </motion.div>
  );
};
