import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="home">
        G
      </Link>
      <nav className="nav-content">
        <NavLink className="navlink" exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink className="navlink" exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faSuitcase} />
        </NavLink>
        <NavLink className="navlink" exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
