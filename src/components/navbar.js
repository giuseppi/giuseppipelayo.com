import React, { useState } from "react";
import NavItem from "./navitem.js";
import { HashLink } from "react-router-hash-link";

// FontAwesome
import { faCircleHalfStroke, faEnvelope, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import Popup from "./popup.js";

const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <section className="navbar">
        <HashLink smooth to="/" className="home">
          G
        </HashLink>
        <nav className="nav-content">
          <HashLink className="navlink" exact="true" activeclassname="active" smooth to="#about">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-about"} icon={faUser} description="about" />
          </HashLink>
          <HashLink className="navlink" exact="true" activeclassname="active" smooth to="#projects">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-projects"} icon={faSuitcase} description="projects" />
          </HashLink>
          <button onClick={() => setButtonPopup(true)} className="navlink" activeclassname="active" id="header-contact-btn">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-contact"} icon={faEnvelope} description="contact" />
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
          <HashLink className="navlink" exact="true" activeclassname="active" to="/">
            <NavItem iconClass={"nav"} descClass={"nav"} descID={"nav-darkmode"} icon={faCircleHalfStroke} description="dark" />
          </HashLink>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
