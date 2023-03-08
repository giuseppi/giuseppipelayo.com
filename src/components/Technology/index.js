import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

const Technology = ({ iconName, iconLabel }) => {
  return (
    <div className="technology">
      <div className="technology_circle">
        <FontAwesomeIcon className="technology_icon" icon={iconName} />
      </div>
      <span className="technology_label">{iconLabel}</span>
    </div>
  );
};

export default Technology;
