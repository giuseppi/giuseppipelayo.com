import React from "react";
import Technology from "../Technology";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import "./index.scss";

const Modal = ({ data, close }) => {
  const { project, description, imgURL, progress, technologies } = data;

  const modalVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalContentVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div className="modal" onClick={(e) => e.stopPropagation()} variants={modalVariants}>
      <motion.img className="modal_image" alt="project" src={imgURL} variants={imageVariants} />
      <motion.div className="modal_content" variants={modalContentVariants}>
        <motion.div className="modal_row" variants={modalRowVariants}>
          <span className="modal_progress" style={{ backgroundColor: progress.color }}>
            {progress.text}
          </span>
        </motion.div>
        <motion.div className="modal_row" variants={modalRowVariants}>
          <span className="modal_title">{project}</span>
        </motion.div>
        {/* <div className="modal_row">
          <span className="modal_description">{description}</span>
        </div> */}
        <motion.div className="modal_row" variants={modalRowVariants}>
          {technologies.map((item) => (
            <Technology iconName={item.label} iconLabel={item.label} />
          ))}
        </motion.div>
        <motion.div className="modal_description-wrapper" variants={modalRowVariants}>
          <p className="modal_description">{description}</p>
        </motion.div>
        <button className="modal_close-wrapper" onClick={close}>
          <IoCloseCircleOutline className="modal_close-icon" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
