import { motion } from "framer-motion";
import React from "react";
import eSummitLogoDesktop from "../assets/Logo-desktop.png";
import eSummitLogoMobile from "../assets/Logo-mobile.png";
import MediaQuery from "react-responsive";

const Hero1 = () => {
  return (
    <div
      name="Hero1"
      id="Hero1"
      className="pt-48 md:pt-36 relative text-white font-semibold flex justify-center"
    >
      <MediaQuery minWidth={769}>
        <motion.img
          src={eSummitLogoDesktop}
          alt="Esummit-logo"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        ></motion.img>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <motion.img
          src={eSummitLogoMobile}
          alt="Esummit-logo"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        ></motion.img>
      </MediaQuery>
    </div>
  );
};

export default Hero1;
