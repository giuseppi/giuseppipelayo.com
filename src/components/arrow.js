import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Arrow = ({ arrowClass }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      {/* {console.log(`#${arrowClass.slice(6)}`)} */}
      <motion.div ref={ref} className={arrowClass}>
        <HashLink
          style={{
            opacity: !isInView ? 0 : 1,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
          smooth
          to={`#${arrowClass.slice(6)}`}
          className="arrow-link">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </HashLink>
      </motion.div>
    </>
  );
};

export default Arrow;
