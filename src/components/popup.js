import React from "react";
import NavItem from "./navitem.js";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Popup = (props) => {
  return props.trigger ? (
    <>
      <div className="popup-container">
        <div className="popup-text">test</div>
        <div className="popup-form">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            <NavItem iconClass={"popup"} descClass={"popup"} descID={"popup-close"} icon={faXmark} description="close" />
          </button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Popup;
