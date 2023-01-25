import React from "react";
import Navbar from "./navbar";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <Navbar />
        <h1 className="name">Hi, I'm Giuseppi</h1>
        <h1 className="slogan">Aspiring Developer</h1>
      </div>
    </>
  );
};

export default Header;
