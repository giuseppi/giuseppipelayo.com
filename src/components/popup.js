import React from "react";
import NavItem from "./navitem.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Popup = ({ handleClose }) => {
  return (
    <motion.div className="popup-container" onClick={handleClose} variants={dropIn} initial="hidden" animate="visible" exit="exit">
      {/* Actual Popup Box */}
      <div className="popup-info" onClick={(e) => e.stopPropagation()}>
        {/* Text */}
        <div className="popup-text">test</div>
        {/* Mail form */}
        <div className="popup-form">
          <motion.button
            className="close-btn"
            whileHover={{ color: "#239ccd", transform: "translate(0, -0.25rem)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", duration: ".25s" }}
            onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} className={"popup-icon"} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
