import React from "react";
import { Link } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Link to="/" className="footer-home">
          G
        </Link>
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
        </div>
      </div>
    </>
  );
};

export default Footer;
