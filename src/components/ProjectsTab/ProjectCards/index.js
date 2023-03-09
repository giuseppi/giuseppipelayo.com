import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./index.scss";
import Technology from "../Technology";
import { parse } from "@fortawesome/fontawesome-svg-core";

const ProjectCards = ({ data }) => {
  // https://www.youtube.com/watch?v=2H6ynAUyD4Q&t=619s
  const { project, brief, description, imgURL, progress, technologies } = data;
  return (
    <div className="projectcards">
      <div className="projectcards_content">
        <div className="projectcards_image-container">
          <img className="projectcards_image" src={imgURL} alt="project pic" />
        </div>
        <div className="projectcards_details">
          <div className="projectcards_progress" style={{ backgroundColor: progress.color }}>
            {progress.text}
          </div>
          <div className="projectcards_row">
            <span className="projectcards_title">{project}</span>
          </div>
          <div className="projectcards_row">
            <span className="projectcards_brief">{brief}</span>
          </div>
          <div className="projectcards_row">
            {technologies.map((item) => (
              <Technology iconName={item.label} iconLabel={item.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
