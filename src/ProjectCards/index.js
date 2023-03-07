import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./index.scss";
import Card from "../components/Card";

const ProjectCards = () => {
  // https://www.youtube.com/watch?v=rZ6iu5FQr2c
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-wrapper">
      <Card project="Portfolio" description="this is portfolio" />
      <Card project="GFit" description="this is gfit" />
    </div>
  );
};

export default ProjectCards;
