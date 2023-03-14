import React from "react";
import { resultProps } from "./ProjectsScreen";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
export const ProjectCard = ({
  _id,
  desc,
  googlePlayLink,
  gitLink,
  images,
  name,
  type,
  mainImg,
  tags,
}: resultProps) => {
  
    console.log(`NAaaaaaame ${name}`)
  const navigate = useNavigate();
  return (
    <motion.div
  
    whileHover={{ scale: 1.1 }}
    animate={{ y: -10 }} transition={{ duration: 1 }}
      className="projects-card"
      key={_id}
      style={{
        width: type === "flutter" ? "20%" : "40%",
        height: type === "flutter" ? "70%" : "50%",
      }}

      onClick={() =>
        navigate("/project-details", {
          state: {
            name,
            desc,
            images,
            googlePlayLink,
            gitLink,
            tags,
            type,
          },
        })
      }
    >
      <div className="con-container">
        <img src={mainImg} width="200px" height="400px" alt="main" />
        <h4>{name}</h4>
      </div>
    </motion.div>
  );
};
