import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Link to="/" className="footer-home">
          G
        </Link>
        <nav className="social-content">
          <NavLink className="socialLink" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" id="linkedin" />
            <p className="social-description" id="social-linkedin">
              Linkedin
            </p>
          </NavLink>
          <NavLink className="socialLink" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faGithub} className="social-icon" id="github" />
            <p className="social-description" id="social-github">
              Github
            </p>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Footer;
