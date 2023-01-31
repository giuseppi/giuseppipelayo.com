import React from "react";
import Navbar from "./navbar";
import SocialItem from "./socialitem.js";

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
        <ul className="header-content">
          <li>
            <a className="headerlink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/giuseppi-pelayo-a971b515a">
              <FontAwesomeIcon icon={faLinkedinIn} className="header-icon" id="header-linkedin-icon" />
              <p className="header-description" id="header-linkedin-description">
                Linkedin
              </p>
            </a>
          </li>
          <li>
            <a className="headerlink" target="_blank" rel="noreferrer" href="https://github.com/giuseppi">
              <FontAwesomeIcon icon={faGithub} className="header-icon" id="header-github-icon" />
              <p className="header-description" id="header-github-description">
                Github
              </p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
