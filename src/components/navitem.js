import React from "react";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ myID, icon, description }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} className="nav-icon" />
      <p className="nav-description" id={myID}>
        {description}
      </p>
    </>
  );
};

export default NavItem;
