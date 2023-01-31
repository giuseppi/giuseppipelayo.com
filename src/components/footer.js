import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import SocialItem from "./socialitem.js";
import NavItem from "./navitem.js";
import Popup from "./popup";

// FontAwesome
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
          <SocialItem
            mediaType={"linkedin"}
            location={"footer"}
            link={"https://www.linkedin.com/in/giuseppi-pelayo-a971b515a"}
            icon={faLinkedinIn}
            description={"LinkedIn"}
          />
          <SocialItem mediaType={"github"} location={"footer"} link={"https://github.com/giuseppi"} icon={faGithub} description={"Github"} />
          <button onClick={() => setButtonPopup(true)} className="footer-link" id="footer-contact-btn">
            <NavItem iconClass={"footer"} descClass={"footer"} descID={"footer-contact"} icon={faEnvelope} description={"Contact"} />
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>
      </div>
    </>
  );
};

export default Footer;
