import { React, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EventCardDesktop = ({ id, title, description, imgUrl }) => {
  const [cardHover, setCardHover] = useState(false);
  const cardAnimation = useAnimation();
  const [eventRef, eventInView] = useInView();
  const eventAnimation = useAnimation({
    threshold: 0.2,
  });

  const imgVariants = {
    hidden: {
      scale: 1,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
    visible: {
      scale: 0.8,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
  };

  const headingVariants = {
    hidden: {
      y: 50,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
    visible: {
      y: 0,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
  };

  const infoVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.5 },
    },
  };

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

  useEffect(() => {
    if (cardHover) {
      cardAnimation.start("visible");
    } else {
      cardAnimation.start("hidden");
    }
  }, [cardHover, cardAnimation]);

  return (
    <motion.div
      key={id}
      style={{
        backgroundColor: `${cardHover ? "#0ba2d0" : "#11bdf2"}`,
        width: "320px",
        height: "320px",
        color: "#000",
      }}
      className="rounded-2xl p-8 cursor-pointer m-4 relative"
      ref={eventRef}
      initial="hidden"
      animate={eventAnimation}
      variants={eventVariants}
      onMouseOver={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <motion.img
        src={imgUrl}
        alt="event"
        style={{ width: "120px", height: "120px" }}
        variants={imgVariants}
        animate={cardAnimation}
        className="mx-auto "
      />

      <motion.h3
        variants={headingVariants}
        animate={cardAnimation}
        className="tracking-wider font-medium uppercase text-lg flex justify-center items-center mb-2"
      >
        {title}
      </motion.h3>

      <motion.p
        variants={infoVariants}
        animate={cardAnimation}
        className="w-full"
      >
        {description}
      </motion.p>

      <motion.p
        variants={buttonVariants}
        animate={cardAnimation}
        className="uppercase event-card-btn"
      >
        Visit website
      </motion.p>
    </motion.div>
  );
};

export default EventCardDesktop;
