import React from "react";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialItem = (myID, link, icon, description) => {
  return (
    <>
      <a className="headerlink" target="_blank" rel="noreferrer" href={link}>
        <FontAwesomeIcon icon={icon} className="header-icon" id="head-li" />
        <p className="header-description" id={myID}>
          {description}
        </p>
      </a>
    </>
  );
};

export default SocialItem;
