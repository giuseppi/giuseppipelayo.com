import React from "react";
import NavItem from "./navitem.js";
import { motion, AnimatePresence } from "framer-motion";
import DownloadLink from "react-download-link";
import { HashLink } from "react-router-hash-link";

import Resume from "../assets/GiuseppiPelayo_Resume.pdf";

// FontAwesome
import { faCircleHalfStroke, faEnvelope, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import Popup from "./popup.js";

const Navbar = ({ modalOpen, closePopup, openPopup }) => {
  return (
    <>
      <section className="navbar">
        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="button-wrapper">
          <HashLink smooth to="/" className="home">
            G
          </HashLink>
        </motion.div>
        <motion.nav initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="nav-content">
          {/* Resume */}
          <motion.div whileTap={{ scale: 0.9 }} className="button-wrapper">
            <a download href={Resume} className="navlink" exact="true" activeclassname="active">
              <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-resume"} icon={faUser} description="resume" />
            </a>
          </motion.div>
          {/* Projects */}
          <motion.div className="button-wrapper" whileTap={{ scale: 0.9 }}>
            <HashLink className="navlink" exact="true" activeclassname="active" smooth to="#projects">
              <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-projects"} icon={faSuitcase} description="projects" />
            </HashLink>
          </motion.div>
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
          <motion.div className="button-wrapper" whileTap={{ scale: 0.9 }}>
            <HashLink className="navlink" exact="true" activeclassname="active" to="/">
              <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-darkmode"} icon={faCircleHalfStroke} description="dark" />
            </HashLink>
          </motion.div>
        </motion.nav>
      </section>
    </>
  );
};

export default Navbar;
