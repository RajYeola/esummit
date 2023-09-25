import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const NumbersDataDesktop = ({
  numbersRef,
  numbersAnimation,
  aboutVariants,
  numbersInView,
}) => {
  return (
    <motion.div
      ref={numbersRef}
      initial="hidden"
      animate={numbersAnimation}
      variants={aboutVariants}
      className="w-4/5 mx-auto grid grid-cols-4 py-6 md:mt-8 border-primary border-y-2"
    >
      <div className="flex flex-col items-center">
        <CountUp
          end={numbersInView ? 4000 : 0}
          suffix="+"
          duration={2}
          className="text-4xl color-primary"
        />
        <h3 className="text-2xl font-lovelo font-semibold pt-4">
          Participants
        </h3>
      </div>

      <div className="flex flex-col items-center">
        <CountUp
          end={numbersInView ? 15 : 0}
          suffix="+"
          duration={2}
          className="text-4xl color-primary"
        />
        <h3 className="text-2xl text-center font-lovelo font-semibold pt-4">
          Associations &#38; Collaborations
        </h3>
      </div>

      <div className="flex flex-col items-center">
        <CountUp
          end={numbersInView ? 6 : 0}
          suffix="+"
          duration={2}
          className="text-4xl color-primary"
        />
        <h3 className="text-2xl font-lovelo font-semibold pt-4">Events</h3>
      </div>

      <div className="flex flex-col items-center">
        <CountUp
          end={numbersInView ? 5 : 0}
          suffix="+"
          duration={2}
          className="text-4xl color-primary"
        />
        <h3 className="text-2xl text-center font-lovelo font-semibold pt-4">
          Keynote Speakers
        </h3>
      </div>
    </motion.div>
  );
};

export default NumbersDataDesktop;
