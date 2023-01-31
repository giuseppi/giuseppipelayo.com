import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import NavItem from "./navitem.js";
import Popup from "./popup";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="footer-container">
        <HashLink smooth to="#" className="footer-home">
          G
        </HashLink>
        <div className="social-content">
          <a className="footerlink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/giuseppi-pelayo-a971b515a">
            <FontAwesomeIcon icon={faLinkedinIn} className="footer-icon" id="footer-linkedin-icon" />
            <p className="footer-description" id="footer-linkedin-description">
              Linkedin
            </p>
          </a>
          <a className="footerlink" target="_blank" rel="noreferrer" href="https://github.com/giuseppi">
            <FontAwesomeIcon icon={faGithub} className="footer-icon" id="footer-github-icon" />
            <p className="footer-description" id="footer-github-description">
              Github
            </p>
          </a>
          <button onClick={() => setButtonPopup(true)} className="footerlink" id="footer-contact-btn">
            <NavItem iconClass={"footer"} descClass={"footer"} descID={"footer-contact"} icon={faEnvelope} description={"Contact"} />
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>
      </div>
    </>
  );
};

export default Footer;
