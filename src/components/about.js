import React from "react";
import { motion } from "framer-motion";

import Arrow from "./arrow.js";
import Temp from "../assets/img/temp_pic.jpg";

const About = () => {
  return (
    <>
      <div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="about-container" id="about">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="about-heading-container">
          <h1>About Me</h1>
          <h4>Get to know me!</h4>
        </motion.div>
        <div className="about-me">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="about-description">
            <p>
              Hello world! I am Giuseppi Pelayo, an aspiring web developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste
              est molestiae odit, reprehenderit numquam magni sunt libero at recusandae necessitatibus iusto mollitia quibusdam omnis minus architecto
              aspernatur suscipit. Beatae? Rerum asperiores ratione accusantium voluptates repellendus, harum perferendis provident
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="about-image">
            <img src={Temp} alt="temp" />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} className="arrow-projects">
          <Arrow />
        </motion.div>
      </div>
    </>
  );
};

export default About;
