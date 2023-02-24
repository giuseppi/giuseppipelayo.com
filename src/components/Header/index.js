import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

import "./index.scss";

import Arrow from "../Arrow";
import SocialItem from "../SocialItem";

// FontAwesome
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = ({ modalOpen, closePopup, openPopup }) => {
  return (
    <>
      <div className="header-container">
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
        <Arrow arrowClass={"arrow-projects"} />
      </div>
    </>
  );
};

export default Header;
