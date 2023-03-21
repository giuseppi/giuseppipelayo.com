import React from "react";
import Technology from "../Technology";
import { IoCloseCircleOutline } from "react-icons/io5";

import "./index.scss";

const Modal = ({ data, close }) => {
  const { project, description, imgURL, progress, technologies } = data;
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <img className="modal_image" alt="project" src={imgURL} />
      <div className="modal_content">
        <div className="modal_row">
          <span className="modal_progress" style={{ backgroundColor: progress.color }}>
            {progress.text}
          </span>
        </div>
        <div className="modal_row">
          <span className="modal_title">{project}</span>
        </div>
        {/* <div className="modal_row">
          <span className="modal_description">{description}</span>
        </div> */}
        <div className="modal_row">
          {technologies.map((item) => (
            <Technology iconName={item.label} iconLabel={item.label} />
          ))}
        </div>
        <div className="modal_description-wrapper">
          <p className="modal_description">{description}</p>
        </div>
        <button className="modal_close-wrapper" onClick={close}>
          <IoCloseCircleOutline className="modal_close-icon" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
