import React from "react";
import NavItem from "./navitem.js";
import { motion, AnimatePresence, isMotionComponent } from "framer-motion";
import { HashLink } from "react-router-hash-link";

// FontAwesome
import { faCircleHalfStroke, faEnvelope, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import Popup from "./popup.js";

const Navbar = ({ modalOpen, closePopup, openPopup }) => {
  const MotionHashLink = motion(HashLink);
  return (
    <>
      <section className="navbar">
        <MotionHashLink whileHover={{ scale: 2 }} whileTap={{ scale: 0.9 }} smooth to="/" className="home">
          G
        </MotionHashLink>
        <nav className="nav-content">
          {/* About */}
          <MotionHashLink whileTap={{ scale: 0.9 }} className="navlink" exact="true" activeclassname="active" smooth to="#about">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-about"} icon={faUser} description="about" />
          </MotionHashLink>
          {/* Projects */}
          <MotionHashLink whileTap={{ scale: 0.9 }} className="navlink" exact="true" activeclassname="active" smooth to="#projects">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-projects"} icon={faSuitcase} description="projects" />
          </MotionHashLink>
          {/* Contact */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? closePopup() : openPopup())}
            className="navlink"
            activeclassname="active"
            id="header-contact-btn">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-contact"} icon={faEnvelope} description="contact" />
          </motion.button>
          <AnimatePresence
            // Disable any initial animations on children that
            // are present when component is first rendered
            initial={false}
            onExitComplete={() => null}>
            {modalOpen && <Popup modalOpen={modalOpen} handleClose={closePopup} />}
          </AnimatePresence>

          {/* Dark/Light Mode */}
          <MotionHashLink whileTap={{ scale: 0.9 }} className="navlink" exact="true" activeclassname="active" to="/">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-darkmode"} icon={faCircleHalfStroke} description="dark" />
          </MotionHashLink>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
