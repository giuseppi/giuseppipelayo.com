import React, { useState } from "react";
import { motion } from "framer-motion";

import "./index.scss";

const Card = ({ project, description, img }) => {
  // https://www.youtube.com/watch?v=rZ6iu5FQr2c
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      style={{ borderRadius: "1rem", boxShadow: "10px 10px 20px rgba(0,0,0,0.2)" }}
      className="card">
      <motion.h2 layout="position">{project}</motion.h2>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="expand">
          <p>{description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
