import React from "react";
import { HashLink } from "react-router-hash-link";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faEnvelope, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <HashLink to="/" className="home">
          G
        </HashLink>
        <nav className="nav-content">
          <HashLink className="navlink" exact="true" activeclassname="active" smooth to="#about">
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            <p className="nav-description" id="nav-about">
              about
            </p>
          </HashLink>
          <HashLink className="navlink" exact="true" activeclassname="active" smooth to="#projects">
            <FontAwesomeIcon icon={faSuitcase} className="nav-icon" />
            <p className="nav-description" id="nav-projects">
              projects
            </p>
          </HashLink>
          <HashLink className="navlink" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
            <p className="nav-description" id="nav-contact">
              contact
            </p>
          </HashLink>
          <HashLink className="navlink" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faCircleHalfStroke} className="nav-icon" />
            <p className="nav-description" id="nav-darkmode">
              dark
            </p>
          </HashLink>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
