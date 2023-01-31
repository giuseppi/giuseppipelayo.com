import React from "react";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialItem = ({ mediaType, location, link, icon, description }) => {
  return (
    <>
      <a className={`${location}-link`} href={link}>
        <FontAwesomeIcon icon={icon} className={`${location}-icon`} id={`${location}-${mediaType}-icon`} />
        <p className={`${location}-description`} id={`${location}-${mediaType}-description`}>
          {description}
        </p>
      </a>
    </>
  );
};

export default SocialItem;
