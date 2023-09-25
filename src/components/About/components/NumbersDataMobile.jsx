import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const NumbersDataMobile = ({
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
      className="py-4"
    >
      <div className="grid grid-cols-2 border-primary border-y-2 py-2">
        <div className="flex flex-col items-center">
          <CountUp
            end={numbersInView ? 4000 : 0}
            suffix="+"
            duration={2}
            className="text-2xl color-primary"
          />
          <h3 className="text-lg font-lovelo font-semibold pt-4">
            Participants
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <CountUp
            end={numbersInView ? 15 : 0}
            suffix="+"
            duration={2}
            className="text-2xl color-primary"
          />
          <h3 className="text-lg text-center font-lovelo font-semibold pt-4">
            Associations &#38; Collaborations
          </h3>
        </div>
      </div>

      <div className="flex justify-around border-primary border-y-2 mt-8 py-2">
        <div className="flex flex-col items-center">
          <CountUp
            end={numbersInView ? 6 : 0}
            suffix="+"
            duration={2}
            className="text-2xl color-primary"
          />
          <h3 className="text-lg font-lovelo font-semibold pt-4">Events</h3>
        </div>

        <div className="flex flex-col items-center">
          <CountUp
            end={numbersInView ? 5 : 0}
            suffix="+"
            duration={2}
            className="text-2xl color-primary"
          />
          <h3 className="text-lg font-lovelo font-semibold pt-4">
            Keynote Speakers
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default NumbersDataMobile;
