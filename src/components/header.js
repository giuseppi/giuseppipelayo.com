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
            <SocialItem
              mediaType={"linkedin"}
              location={"header"}
              link={"https://www.linkedin.com/in/giuseppi-pelayo-a971b515a"}
              icon={faLinkedinIn}
              description={"LinkedIn"}
            />
          </li>
          <li>
            <SocialItem mediaType={"github"} location={"header"} link={"https://github.com/giuseppi"} icon={faGithub} description={"Github"} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
