import React from "react";
import Navbar from "./navbar";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <Navbar />
        <h1 className="name">Hi, I'm Giuseppi</h1>
        <h1 className="slogan">Aspiring Developer</h1>
        <div className="header-content">
          <a className="headerlink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/giuseppi-pelayo-a971b515a">
            <FontAwesomeIcon icon={faLinkedinIn} className="header-icon" id="head-li" />
            <p className="header-description" id="header-linkedin">
              Linkedin
            </p>
          </a>
          <a className="headerlink" target="_blank" rel="noreferrer" href="https://github.com/giuseppi">
            <FontAwesomeIcon icon={faGithub} className="header-icon" id="head-gh" />
            <p className="header-description" id="header-github">
              Github
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
