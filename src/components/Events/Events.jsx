import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { eventsData } from "./eventsData";
import MediaQuery from "react-responsive";
import EventCardMobile from "./components/EventCardMobile";
import EventCardDesktop from "./components/EventCardDesktop";

const Events = () => {
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
    <div name="Events" id="Events" className="text-white bg-black">
      <motion.h1
        ref={headingRef}
        initial="hidden"
        animate={headingAnimation}
        variants={headingVariants}
        className="text-2xl md:text-4xl pt-8 md:pt-24 pb-4 md:pb-8 text-center font-lovelo"
      >
        Events
      </motion.h1>

      <MediaQuery minWidth={769}>
        <div className="flex flex-wrap w-4/5 mx-auto justify-around">
          {eventsData.map(({ id, title, description, imgUrl }) => (
            <EventCardDesktop
              id={id}
              title={title}
              description={description}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div className="flex flex-wrap">
          {eventsData.map(({ id, title, description, imgUrl }) => (
            <EventCardMobile
              id={id}
              title={title}
              description={description}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </MediaQuery>
    </div>
  );
};

export default Events;
