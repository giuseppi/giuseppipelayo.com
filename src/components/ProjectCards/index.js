import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./index.scss";

const ProjectCards = ({ data }) => {
  // https://www.youtube.com/watch?v=2H6ynAUyD4Q&t=619s
  const { project, brief, description, imgURL } = data;
  return (
    <div className="projectcards">
      <div className="projectcards_content">
        <div className="projectcards_image-container">
          <img className="projectcards_image" src={imgURL} alt="project pic" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
