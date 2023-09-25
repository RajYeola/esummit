import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EventCardMobile = ({ id, title, description, imgUrl }) => {
  const [eventRef, eventInView] = useInView();
  const eventAnimation = useAnimation({
    threshold: 0.2,
  });

  const eventVariants = {
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
    if (eventInView) {
      eventAnimation.start("visible");
    } else {
      eventAnimation.start("hidden");
    }
  }, [eventInView, eventAnimation]);

  return (
    <motion.div
      key={id}
      style={{
        backgroundColor: "#065a73",
        width: "320px",
        height: "320px",
        color: "#000",
      }}
      className="rounded-2xl p-4 md:p-8 my-4 mx-auto relative"
      ref={eventRef}
      initial="hidden"
      animate={eventAnimation}
      variants={eventVariants}
    >
      <img
        src={imgUrl}
        alt="event"
        style={{ width: "80px", height: "80px" }}
        className="mx-auto mb-8"
      />

      <h3 className="tracking-wider font-medium uppercase text-xl flex justify-center items-center mb-2">
        {title}
      </h3>

      <p className="w-full text-base">{description}</p>

      <p className="uppercase text-center pt-8 tracking-wider">Visit website</p>
    </motion.div>
  );
};

export default EventCardMobile;
