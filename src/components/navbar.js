import React, { useState } from "react";
import NavItem from "./navitem.js";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";

// FontAwesome
import { faCircleHalfStroke, faEnvelope, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import Popup from "./popup.js";

const Navbar = ({ modalOpen, closePopup, openPopup }) => {
  return (
    <>
      <section className="navbar">
        <HashLink smooth to="/" className="home">
          G
        </HashLink>
        <nav className="nav-content">
          {/* About */}
          <HashLink className="navlink" exact="true" activeclassname="active" smooth to="#about">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-about"} icon={faUser} description="about" />
          </HashLink>
          {/* Projects */}
          <HashLink whileTap={{ scale: 0.9 }} className="navlink" exact="true" activeclassname="active" smooth to="#projects">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-projects"} icon={faSuitcase} description="projects" />
          </HashLink>
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
          <HashLink className="navlink" exact="true" activeclassname="active" to="/">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-darkmode"} icon={faCircleHalfStroke} description="dark" />
          </HashLink>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
