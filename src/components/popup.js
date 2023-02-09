import React from "react";
import NavItem from "./navitem.js";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Popup = ({ setButtonPopup }) => {
  return (
    <>
      <div className="popup-container" onClick={setButtonPopup.bind(this, false)}>
        {/* Actual Popup Box */}
        <div className="popup-info" onClick={(e) => e.stopPropagation()}>
          {/* Text */}
          <div className="popup-text">test</div>
          {/* Mail form */}
          <div className="popup-form">
            <button className="close-btn" onClick={setButtonPopup.bind(this, false)}>
              <NavItem iconClass={"popup"} descClass={"popup"} descID={"popup-close"} icon={faXmark} description="home" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
