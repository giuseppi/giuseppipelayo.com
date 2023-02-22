import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import SocialItem from "./socialitem.js";
import { HashLink } from "react-router-hash-link";

// FontAwesome
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = ({ modalOpen, closePopup, openPopup }) => {
  return (
    <>
      <motion.div className="header-container">
        <Navbar modalOpen={modalOpen} closePopup={closePopup} openPopup={openPopup} />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="general">
          {/* Text */}
          <h1 className="name">Hi, I'm Giuseppi</h1>
          <h1 className="slogan">Aspiring Developer</h1>
        </motion.div>
        {/* Social Media */}
        <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="header-content">
          <li>
            {/* Linkedin */}
            <SocialItem
              mediaType={"linkedin"}
              location={"header"}
              link={"https://www.linkedin.com/in/giuseppi-pelayo-a971b515a"}
              icon={faLinkedinIn}
              description={"LinkedIn"}
            />
          </li>
          {/* Github */}
          <li>
            <SocialItem mediaType={"github"} location={"header"} link={"https://github.com/giuseppi"} icon={faGithub} description={"Github"} />
          </li>
        </motion.ul>
        {/* Arrow */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="arrow-about">
          <HashLink smooth to="#about" className="arrow-link">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
          </HashLink>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;
