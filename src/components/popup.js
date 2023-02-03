import React from "react";

const Popup = (props) => {
  return props.trigger ? (
    <>
      <div className="popup-container">
        <div className="popup-text"></div>
        <div className="popup-form">
          <button className="close-btn" onClick={() => props.setTrigger(false)}></button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Popup;
