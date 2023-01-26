import React from "react";
import { HashLink } from "react-router-hash-link";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <HashLink smooth to="#" className="footer-home">
          G
        </HashLink>
        <div className="social-content">
          <a className="socialLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/giuseppi-pelayo-a971b515a">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" id="linkedin" />
            <p className="social-description" id="social-linkedin">
              Linkedin
            </p>
          </a>
          <a className="socialLink" target="_blank" rel="noreferrer" href="https://github.com/giuseppi">
            <FontAwesomeIcon icon={faGithub} className="social-icon" id="github" />
            <p className="social-description" id="social-github">
              Github
            </p>
          </a>
          <HashLink className="socialLink" target="_blank" rel="noreferrer" href="">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" id="footer-contact" />
            <p className="social-description" id="social-contact">
              Contact
            </p>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
