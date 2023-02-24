import React from "react";
import { motion } from "framer-motion";

import "./index.scss";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="projects-heading-container">
        <h1 className="projects-heading">Projects</h1>
        <h4 className="projects-description">See what I've been working on.</h4>
      </motion.div>
    </div>
  );
};

export default Projects;
