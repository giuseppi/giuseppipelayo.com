import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="home" to="/">
        Home
      </Link>
      <nav></nav>
    </div>
  );
};

export default Navbar;
