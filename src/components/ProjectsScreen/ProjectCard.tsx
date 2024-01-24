import React from "react";
import { resultProps } from "./ProjectsScreen";
import { useNavigate, useLocation, useParams } from "react-router-dom";
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
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      animate={{ y: -10 }}
      transition={{ duration: 1 }}
      className="projects-card"
      style={{
        width: type === "flutter" ? "15vw" : "30vw",
        height: type === "flutter" ? "35vw" : "25vw",
      }}
      key={_id}
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
      <div
        className="con-container"
        style={{
          width: type === "flutter" ? "15vw" : "30vw",
          height: type === "flutter" ? "30vw" : "20vw",
        }}
      >
        <img
          src={cover}
          alt="main"
          style={{
            width: type === "flutter" ? "15vw" : "30vw",
            height: type === "flutter" ? "30vw" : "20vw",
          }}
        />
        <h4>{title}</h4>
        <p className="desc">{description}</p>
      </div>
    </motion.div>
  );
};
