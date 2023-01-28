import React from "react";

const Popup = (props) => {
  return props.trigger ? (
    <>
      <div className="popup-container">
        <div className="popup-inner">
          <button className="close-btn">close</button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Popup;
