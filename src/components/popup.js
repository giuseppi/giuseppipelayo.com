import React from "react";

const Popup = (props) => {
  return props.trigger ? (
    <>
      <div className="popup-container">
        <dsiv className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          {props.children}
        </dsiv>
      </div>
    </>
  ) : (
    ""
  );
};

export default Popup;
