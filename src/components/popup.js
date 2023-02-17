import React from "react";
import NavItem from "./navitem.js";
import { AnimatePresence, motion } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Popup = ({ setButtonPopup }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ y: -1000, scale: 0, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -100, scale: 1, opacity: 1 }}
        className="popup-container"
        onClick={setButtonPopup.bind(this, false)}>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
