import React from "react";

import "./index.scss";

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
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus excepturi iure quod modi quo aperiam repudiandae quia illum.
            Ducimus quam dolorum incidunt odio iusto fugit, optio asperiores natus tenetur!
          </p>
          <form>
            <ul>
              <li className="half">
                <motion.input whileFocus={{ transform: "translate(0, -0.25rem)" }} type="text" name="name" placeholder="name" required />
              </li>
              <li className="half">
                <input type="text" name="email" placeholder="email" required />
              </li>
              <li>
                <input type="text" name="subject" placeholder="subject" required />
              </li>
              <li>
                <textarea type="text" name="message" placeholder="message" required />
              </li>
              <li>
                <motion.button
                  whileHover={{ transform: "translate(0, -0.25rem)" }}
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  className="form-button"
                  value="SEND">
                  SEND
                </motion.button>
              </li>
            </ul>
          </form>
        </div>
        <motion.button
          className="close-btn"
          whileHover={{ color: "darkgrey", transform: "translate(0, -0.25rem)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring" }}
          onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} className={"popup-icon"} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Popup;
