import React from "react";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ iconClass, descClass, descID, icon, description }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} className={`${iconClass}-icon`} />
      <p className={`${descClass}-description`} id={descID}>
        {description}
      </p>
    </>
  );
};

export default NavItem;
