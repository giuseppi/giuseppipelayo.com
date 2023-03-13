import React from "react";
import "./index.scss";

const Overlay = ({ children, close }) => {
  return (
    <div className="overlay" onClick={close}>
      {children}
    </div>
  );
};

export default Overlay;
