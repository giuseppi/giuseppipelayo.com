import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import SocialItem from "../SocialItem/index.js";
import NavItem from "../NavItem";
import Popup from "../Popup";

import "./index.scss";

// FontAwesome
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ modalOpen, closePopup, openPopup }) => {
  return (
    <>
      <div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="footer-container">
        {/* Back to Top */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <HashLink smooth to="#" className="footer-home">
            G
          </HashLink>
        </motion.div>
        {/* Socials */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="social-content">
          {/* Linkedin */}
          <SocialItem
            mediaType={"linkedin"}
            location={"footer"}
            link={"https://www.linkedin.com/in/giuseppi-pelayo-a971b515a"}
            icon={faLinkedinIn}
            description={"LinkedIn"}
          />
          {/* Github */}
          <SocialItem mediaType={"github"} location={"footer"} link={"https://github.com/giuseppi"} icon={faGithub} description={"Github"} />
          {/* Contact */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? closePopup() : openPopup())}
            className="footer-link"
            id="footer-contact-btn">
            <NavItem iconClass={"footer"} descClass={"footer"} descID={"footer-contact"} icon={faEnvelope} description={"Contact"} />
          </motion.button>
          <AnimatePresence
            // Disable any initial animations on children that
            // are present when component is first rendered
            initial={false}
            onExitComplete={() => null}>
            {modalOpen && <Popup modalOpen={modalOpen} handleClose={closePopup} />}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
