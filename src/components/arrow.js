import React from "react";
import { HashLink } from "react-router-hash-link";

const Arrow = () => {
  return (
    <>
      <HashLink smooth to="#about" className="arrow-link">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </HashLink>
    </>
  );
};

export default Arrow;
