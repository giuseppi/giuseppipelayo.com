import React from "react";
import "./index.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialItem = ({ mediaType, location, link, icon, description }) => {
  return (
    <>
      <a className={`${location}-link`} href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} className={`${location}-icon`} id={`${location}-${mediaType}-icon`} />
        <p className={`${location}-description`} id={`${location}-${mediaType}-description`}>
          {description}
        </p>
      </a>
    </>
  );
};

export default SocialItem;
