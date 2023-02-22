import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Arrow = ({ arrowClass }) => {
  return (
    <>
      {/* {console.log(`#${arrowClass.slice(6)}`)} */}
      <motion.div className={arrowClass}>
        <HashLink smooth to={`#${arrowClass.slice(6)}`} className="arrow-link">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </HashLink>
      </motion.div>
    </>
  );
};

export default Arrow;
