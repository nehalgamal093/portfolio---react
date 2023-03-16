import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
type resultProps = {
  name: string;
  images: [];
  desc: string;
  googlePlayLink: string;
  gitLink: string;
  tags: [];
  mainImg: string;
  type:string;
};
export const GooglePlayScreen = () => {
  const [data, getData] = useState<resultProps[]>([]);

  useEffect(() => {
    axios
      .get("https://portfolio-d3gj33sv9-nehalgamal093.vercel.app/projects/get-project")
      .then((response) => {
       
        getData(response.data);
      })
      .catch((error) => {

      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      {data.length ? (
        data.map((project) =>
          project.gitLink === "" ? (
            <motion.div
              className="projects-card"
              whileHover={{ scale: 1.1 }}
              animate={{ y: -10 }} transition={{ duration: 1 }}
              onClick={() =>
                navigate("/project-details", {
                  state: {
                    name: project.name,
                    desc: project.desc,
                    images: project.images,
                    googlePlayLink: project.googlePlayLink,
                    gitLink: project.gitLink,
                    tags: project.tags,
                    type:project.type
                  },
                })
              }
            >
              <div className="con-container">
                <img
                  src={project.mainImg}
                  width="300px"
                  height="400px"
                  alt="main"
                />
                <h4>{project.name}</h4>
              </div>
            </motion.div>
          ) : (
            <div></div>
          )
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};
