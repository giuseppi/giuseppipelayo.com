import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./index.scss";
import Technology from "../Technology";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { faCss3, faHtml5, faJs, faJsfiddle, faJsSquare, faMdb, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

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
              <Technology iconName={item.icon} iconLabel={item.label} />
            ))}
            {/* <Technology iconName={faReact} iconLabel={"React"} />
            <Technology iconName={faJs} iconLabel={"JS"} />
            <Technology iconName={faHtml5} iconLabel={"HTML"} />
            <Technology iconName={faCss3} iconLabel={"CSS"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
