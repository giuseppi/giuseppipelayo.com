import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./index.scss";

const ProjectCards = () => {
  // https://www.youtube.com/watch?v=rZ6iu5FQr2c
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-wrapper">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderRadius: "1rem", boxShadow: "10px 10px 20px rgba(0,0,0,0.2)" }}
        className="card">
        <motion.h2 layout="position">GFit</motion.h2>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="expand">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias error impedit, ullam in voluptatem perferendis nisi ratione
              incidunt. Aut.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestias.</p>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderRadius: "1rem", boxShadow: "10px 10px 20px rgba(0,0,0,0.2)" }}
        className="card">
        <motion.h2 layout="position">GFit</motion.h2>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="expand">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias error impedit, ullam in voluptatem perferendis nisi ratione
              incidunt. Aut.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestias.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectCards;
