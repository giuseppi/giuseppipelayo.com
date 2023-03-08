import React, { useState } from "react";
import { motion } from "framer-motion";

import "./index.scss";
import ProjectCards from "../ProjectCards";

const Card = ({ data }) => {
  return (
    <>
      <ProjectCards data={data} />
      {/* logic for rendering the expanded view */}
    </>
  );
};

export default Card;
