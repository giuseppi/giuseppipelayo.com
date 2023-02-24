import React, { useState } from "react";
import Header from "../Header";
import Projects from "../Projects";
import Footer from "../Footer";

import "./index.scss";

const Layout = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closePopup = () => setModalOpen(false);
  const openPopup = () => setModalOpen(true);

  return (
    <>
      <div className="flex-container">
        <Header modalOpen={modalOpen} closePopup={closePopup} openPopup={openPopup} />
        <Projects />
        <Footer modalOpen={modalOpen} closePopup={closePopup} openPopup={openPopup} />
      </div>
    </>
  );
};

export default Layout;