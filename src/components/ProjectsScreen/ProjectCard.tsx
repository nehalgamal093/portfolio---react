import React from "react";
import { resultProps } from "./ProjectsScreen";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const ProjectCard = ({
  _id,
  description,
  googleplaylink,
  gitlink,
  images,
  title,
  type,
  cover,
  tags,
}: resultProps) => {
  const navigate = useNavigate();
  console.log(`type is ==== ${type} `);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      animate={{ y: -10 }}
      transition={{ duration: 1 }}
      className="projects-card"
      key={_id}
      style={{
        width: type === "react" ? "30vw" : "10vw",
        height: type === "react" ? "30vw" : "25vw",
      }}
      onClick={() =>
        navigate("/project-details", {
          state: {
            title,
            description,
            images,
            googleplaylink,
            gitlink,
            tags,
            cover,
            type,
          },
        })
      }
    >
      <div className="con-container">
        <img
          src={cover}
          alt="main"
          style={{
            width: type === "react" ? "30vw" : "10vw",
            height: type === "react" ? "30vw" : "20vw",
          }}
        />
        <h4>{title}</h4>
        {/* <p className="desc">{description}</p> */}
      </div>
    </motion.div>
  );
};
