import React, { useState } from "react";
import Header from "./header.js";
import About from "./about.js";
import Projects from "./projects.js";
import Footer from "./footer.js";
const Layout = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closePopup = () => setModalOpen(false);
  const openPopup = () => setModalOpen(true);

  return (
    <>
      <div className="flex-container">
        <Header modalOpen={modalOpen} closePopup={closePopup} openPopup={openPopup} />
        <About />
        <Projects />
        <Footer modalOpen={modalOpen} closePopup={closePopup} openPopup={openPopup} />
      </div>
    </>
  );
};

export default Layout;
