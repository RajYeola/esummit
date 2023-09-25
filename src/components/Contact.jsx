import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [headingRef, headingInView] = useInView({
    threshold: 0.2,
  });
  const headingAnimation = useAnimation();
  const [contactRef, contactInView] = useInView();
  const contactAnimation = useAnimation({
    threshold: 0.2,
  });

  const contactVariants = {
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
    if (contactInView) {
      contactAnimation.start("visible");
    } else {
      contactAnimation.start("hidden");
    }
  }, [contactInView, contactAnimation]);

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
    <div name="Contact" id="Contact" className="bg-black">
      <motion.h1
        className="text-white text-center text-2xl md:text-4xl pt-8 md:pt-24 pb-4 md:pb-8 font-lovelo"
        ref={headingRef}
        initial="hidden"
        animate={headingAnimation}
        variants={headingVariants}
      >
        Contact
      </motion.h1>

      <motion.div
        ref={contactRef}
        initial="hidden"
        animate={contactAnimation}
        variants={contactVariants}
        className="md:grid grid-contact text-white"
      >
        <div className="w-4/5 md:w-3/5 mx-auto py-2">
          <h2 className="text-xl md:text-3xl text-gray-400 py-2">Reach Out</h2>
          <div className="md:pt-6">
            <p className="py-1">
              E-Cell ICT, Technological Association (TA), Institute of Chemical
              Technology, Mumbai, Maharashtra, India – 400019
            </p>
            <p className="py-1">+91 7972604102 | ecell21.22@gmail.com</p>
          </div>

          <div className="text-white hidden md:flex pt-12 md:text-lg">
            Developed by:{" "}
            <a href="mailto:rajsyeola@gmail.com" className="color-primary pl-2">
              {" "}
              Raj Yeola
            </a>
          </div>
        </div>

        <div className="w-4/5 md:w-full mx-auto md:mx-0 py-2 md:pb-16">
          <h2 className="text-xl md:text-2xl text-gray-400">Support</h2>
          <ul className="flex md:block justify-between py-1 md:pt-6">
            <li className="md:py-1">
              <a className="cursor-pointer hover:text-gray-300">Assosciates</a>
            </li>
            <li className="md:py-1">
              <a className="cursor-pointer hover:text-gray-300">Speakers</a>
            </li>
            <li className="md:py-1">
              <a className="cursor-pointer hover:text-gray-300">Sponsors</a>
            </li>
            <li className="md:py-1">
              <a className="cursor-pointer hover:text-gray-300">
                Media Coverage
              </a>
            </li>
          </ul>
        </div>

        <div className="w-4/5 md:w-full mx-auto md:mx-0 py-2 md:pb-16">
          <h2 className="text-xl md:text-2xl text-gray-400">Company</h2>
          <ul className="flex md:block justify-between py-1 md:pt-6">
            <li className="md:py-1">
              <a className="cursor-pointer hover:text-gray-300">About Us</a>
            </li>
            <li className="md:py-1">
              <a className="cursor-pointer hover:text-gray-300">Terms</a>
            </li>
            <li className="md:py-1">
              <a className="cursor-pointer hover:text-gray-300">Disclaimer</a>
            </li>
          </ul>
        </div>

        <div className="text-white flex w-4/5 mx-auto md:hidden pb-2">
          Developed by:{" "}
          <a href="mailto:rajsyeola@gmail.com" className="color-primary pl-2">
            {" "}
            Raj Yeola
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
