import React from "react";
import { HashLink } from "react-router-hash-link";
import Temp from "../assets/img/temp_pic.jpg";

const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-heading-container">
          <h1>About Me</h1>
          <h4>Get to know me!</h4>
        </div>
        <div className="about-me">
          <div className="about-description">
            <p>
              Hello world! I am Giuseppi Pelayo, an aspiring web developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste
              est molestiae odit, reprehenderit numquam magni sunt libero at recusandae necessitatibus iusto mollitia quibusdam omnis minus architecto
              aspernatur suscipit. Beatae? Rerum asperiores ratione accusantium voluptates repellendus, harum perferendis provident
            </p>
          </div>
          <div className="about-image">
            <img src={Temp} alt="temp" />
          </div>
        </div>
        <div className="arrow-projects">
          <HashLink smooth to="#projects" class="arrow-link">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default About;
