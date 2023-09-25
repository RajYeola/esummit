import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-scroll";
import ecellLogo from "../assets/Ecell-logo (2).png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgMenuRound } from "react-icons/cg";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarAnimation = useAnimation();

  const sidebarVariants = {
    hidden: {
      y: "100vh",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (isSidebarOpen) {
      sidebarAnimation.start("visible");
    } else {
      sidebarAnimation.start("hidden");
    }
  }, [sidebarAnimation, isSidebarOpen]);

  const changeNavbarColor = () => {
    if (window.scrollY >= window.screen.availHeight - 50) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="w-screen max-w-full fixed top-0 z-50">
      <div
        className={`flex justify-between items-center md:py-4 md:px-32 ${
          headerBg ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="p-4">
          <img
            src={ecellLogo}
            alt="ecell-logo"
            style={{ width: "60px", height: "60px" }}
            className="md:p-0 md:m-0"
          />
        </div>
        <div className="md:flex text-white text-lg uppercase hidden">
          <Link
            to="Hero1"
            smooth={true}
            spy={true}
            className="px-4 cursor-pointer"
            activeClass="active"
          >
            Home
          </Link>

          <Link
            to="About"
            smooth={true}
            spy={true}
            className="px-4 cursor-pointer"
            activeClass="active"
            offset={-25}
          >
            About
          </Link>

          <Link
            to="Events"
            smooth={true}
            spy={true}
            className="px-4 cursor-pointer"
            activeClass="active"
            offset={-25}
          >
            Events
          </Link>

          <Link
            to="Workshops"
            smooth={true}
            spy={true}
            className="px-4 cursor-pointer"
            activeClass="active"
            offset={-25}
          >
            Workshops
          </Link>

          <Link
            to="Speakers"
            smooth={true}
            spy={true}
            className="px-4 cursor-pointer"
            activeClass="active"
            offset={-25}
          >
            Speakers
          </Link>

          <Link
            to="Contact"
            smooth={true}
            spy={true}
            className="px-4 cursor-pointer"
            activeClass="active"
            // offset={-380}
          >
            Contact
          </Link>
        </div>

        <div
          style={{ zIndex: "999" }}
          className="fixed bottom-4 right-4 text-4xl py-2 px-4 md:hidden"
        >
          {isSidebarOpen ? (
            <AiOutlineCloseCircle
              onClick={() => setIsSidebarOpen(false)}
              className="text-black"
            />
          ) : (
            <CgMenuRound
              onClick={() => setIsSidebarOpen(true)}
              className="color-primary text-5xl"
            />
          )}
        </div>
      </div>

      <motion.div
        style={{ zIndex: "900" }}
        className={`sidebar-menu fixed bottom-0 right-0 w-screen h-screen flex-col justify-around pt-10 text-3xl bg-white flex md:hidden`}
        variants={sidebarVariants}
        initial="hidden"
        animate={sidebarAnimation}
      >
        <Link
          to="Hero1"
          smooth={true}
          spy={true}
          className="mx-auto"
          activeClass="active"
          onClick={() => setIsSidebarOpen(false)}
        >
          Home
        </Link>

        <Link
          to="About"
          smooth={true}
          spy={true}
          className="mx-auto"
          activeClass="active"
          onClick={() => setIsSidebarOpen(false)}
          offset={-60}
        >
          About
        </Link>

        <Link
          to="Events"
          smooth={true}
          spy={true}
          className="mx-auto"
          onClick={() => setIsSidebarOpen(false)}
          offset={-60}
        >
          Events
        </Link>

        <Link
          to="Workshops"
          smooth={true}
          spy={true}
          className="mx-auto"
          onClick={() => setIsSidebarOpen(false)}
          offset={-60}
        >
          Workshops
        </Link>

        <Link
          to="Speakers"
          smooth={true}
          spy={true}
          className="mx-auto"
          onClick={() => setIsSidebarOpen(false)}
          offset={-60}
        >
          Speakers
        </Link>

        <Link
          to="Contact"
          smooth={true}
          spy={true}
          className="mx-auto"
          onClick={() => setIsSidebarOpen(false)}
          offset={-60}
        >
          Contact
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
