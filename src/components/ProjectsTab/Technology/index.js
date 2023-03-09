import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJs, faMdb, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

import "./index.scss";

const Technology = ({ iconLabel }) => {
  const Icon = (iconName) => {
    // console.log(iconName);
    return iconName === "React"
      ? faReact
      : iconName === "JS"
      ? faJs
      : iconName === "HTML"
      ? faHtml5
      : iconName === "CSS"
      ? faCss3
      : iconName === "MongoDB"
      ? faMdb
      : iconName === "NodeJS"
      ? faNodeJs
      : null;
  };
  return (
    <div className="technology">
      <div className="technology_circle">
        <FontAwesomeIcon icon={Icon(iconLabel)} className="technology_icon" />
      </div>
      <span className="technology_label">{iconLabel}</span>
    </div>
  );
};

export default Technology;
