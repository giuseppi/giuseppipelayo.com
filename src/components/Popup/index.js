import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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

const focusBox = {
  transform: "translate(0, -0.25rem",
  boxShadow: "7.5px 7.5px 20px #495057",
};

const Popup = ({ handleClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.name.value; // Assuming there's an input with name="user_name"

    emailjs.sendForm("service_vcoqms8", "template_l0dmcar", form.current, "Stke9DRB0LAddRiQ3").then(
      (result) => {
        alert(`E-mail sent, thank you ${userName}!`);
      },
      (error) => {
        alert(`E-mail failed to send. ${error.text}`);
      }
    );
  };

  return (
    <motion.div className="popup-container" onClick={handleClose} initial="hidden" variants={dropIn} animate="visible" exit="exit">
      {/* Actual Popup Box */}
      <div className="popup-info" onClick={(e) => e.stopPropagation()}>
        {/* Text */}
        {/* <div className="popup-text">test</div> */}
        {/* Mail form */}
        <div className="popup-form">
          <div className="about">
            <motion.h1 initial="hidden" animate="visible">
              Let's talk!
            </motion.h1>
            <motion.p initial="hidden" animate="visible">
              Whether you have a question, a project in mind, or just want to connect, I'm here to listen and explore how we can collaborate. With a
              passion for problem-solving and a commitment to delivering high-quality software solutions, I'm eager to bring my skills in C++,
              JavaScript, React, HTML & CSS to your next project. Drop me a message, and let's start the conversation on how we can work together to
              create something amazing.
            </motion.p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <label for="name">
                  Name *
                  <motion.input
                    whileFocus={{ borderBottom: "3px solid #239ccd" }}
                    initial="hidden"
                    animate="visible"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </label>
              </li>

              <li className="half">
                <label for="email">
                  E-mail *
                  <motion.input
                    whileFocus={{ borderBottom: "3px solid #239ccd" }}
                    initial="hidden"
                    animate="visible"
                    type="text"
                    id="email"
                    name="email"
                    required
                  />
                </label>
              </li>
              <li>
                <label id="subject-label" for="subject">
                  Subject *
                  <motion.input
                    whileFocus={{ borderBottom: "3px solid #239ccd" }}
                    initial="hidden"
                    animate="visible"
                    type="text"
                    id="subject"
                    name="subject"
                    required
                  />
                </label>
              </li>

              <label id="message-label" for="message">
                Message *
              </label>
              <li>
                <motion.textarea
                  whileFocus={{ borderBottom: "3px solid #239ccd" }}
                  initial="hidden"
                  animate="visible"
                  type="text"
                  id="message"
                  name="message"
                  required
                />
              </li>
              <li>
                <motion.button
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transform: "translate(0, -0.25rem)" }}
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  className="form-button"
                  value="SEND"
                  onClick={handleClose}>
                  SEND
                </motion.button>
              </li>
            </ul>
          </form>
        </div>
        <motion.button
          className="close-btn"
          whileHover={{ transform: "translate(0, -0.25rem" }}
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
