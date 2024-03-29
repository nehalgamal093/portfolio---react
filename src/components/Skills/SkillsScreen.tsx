import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./skills-screen.css";

export const SkillsScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="skills-container">
      <motion.div
        className="card-container"
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("flutter")}
      >
        <img
          alt="flutter"
          src={require("../images/flutter.png")}
          width="50px"
          height="50px"
        />

        <p>Flutter</p>
      </motion.div>
      <motion.div
        className="card-container"
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("react")}
      >
        <div className="circle-container">
          <span>
            <img
              src={require("../images/science.png")}
              width="50px"
              height="50px"
              alt="react"
            />
          </span>
        </div>
        <p>React js</p>
      </motion.div>
      {/* <motion.div
        className="card-container"
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("html")}
      >
        <div className="circle-container">
          <span>
            <img
              src={require("../images/html.png")}
              width="50px"
              height="50px"
              alt="html"
            />
          </span>
        </div>
        <p>HtML/CSS</p>
      </motion.div> */}
      <motion.div
        className="card-container"
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("android")}
      >
        <div className="circle-container">
          <span>
            <img
              src={require("../images/android.png")}
              width="50px"
              height="50px"
              alt="html"
            />
          </span>
        </div>
        <p>Android/Java</p>
      </motion.div>
    </div>
  );
};
