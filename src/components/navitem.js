import React from "react";
import { HashLink } from "react-router-hash-link";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ link, icon, description }) => {
  return (
    <>
      <HashLink smooth to={link}>
        <FontAwesomeIcon icon={icon} className="nav-icon" />
        <p className="nav-description" id="nav-about">
          {description}
        </p>
      </HashLink>
    </>
  );
};

export default NavItem;
