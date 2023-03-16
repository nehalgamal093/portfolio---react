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
  

  const navigate = useNavigate();
  return (
    <motion.div
  
    whileHover={{ scale: 1.1 }}
    animate={{ y: -10 }} transition={{ duration: 1 }}
      className="projects-card"
      key={_id}
     

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
        <img src={mainImg}  alt="main" style={{
        width: type === "flutter" ? "15vw" : "30vw",
        height: type === "flutter" ? "30vw" : "20vw",
      }} />
        <h4>{name}</h4>
      </div>
    </motion.div>
  );
};
