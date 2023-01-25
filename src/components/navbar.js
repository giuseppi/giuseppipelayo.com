import React from "react";
import { Link, NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faEnvelope, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <Link to="/" className="home">
          G
        </Link>
        <nav className="nav-content">
          <NavLink className="navlink" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            <p className="nav-description" id="nav-about">
              about
            </p>
          </NavLink>
          <NavLink className="navlink" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faSuitcase} className="nav-icon" />
            <p className="nav-description" id="nav-projects">
              projects
            </p>
          </NavLink>
          <NavLink className="navlink" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
            <p className="nav-description" id="nav-contact">
              contact
            </p>
          </NavLink>
          <NavLink className="navlink" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faCircleHalfStroke} className="nav-icon" />
            <p className="nav-description" id="nav-darkmode">
              dark
            </p>
          </NavLink>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
