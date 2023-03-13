import React from "react";
import Technology from "../Technology";
// import { IoCloseCircleOutline } from "react-icons/io5";

import "./index.scss";

const Modal = ({ data, close }) => {
  const { project, description, imgURL, progress, technologies } = data;
  return (
    <div className="modal">
      <img className="modal_image" alt="project" src={imgURL} />
      <div className="modal_content">
        <div className="modal_row">
          <span className="modal_progress">{progress}</span>
        </div>
        <div className="modal_row">
          <span className="modal_title">{project}</span>
        </div>
        <div className="modal_row">
          <span className="modal_description">{description}</span>
        </div>
        <div className="modal_row">
          {technologies.map((item) => (
            <Technology iconName={item.label} iconLabel={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
