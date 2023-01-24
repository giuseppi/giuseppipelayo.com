import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="home">
        G
      </Link>
      <nav className="nav-content">
        <NavLink className="navlink" exact="true" activeclassname="active" to="/">
          projects
        </NavLink>
        <NavLink className="navlink" exact="true" activeclassname="active" to="/">
          about
        </NavLink>
        <NavLink className="navlink" exact="true" activeclassname="active" to="/">
          contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
