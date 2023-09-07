import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {Box,Skeleton} from '@mui/material';


type resultProps = {
  title: string;
  images: [
    {
      attachment_file: string;
      cloudinary_id: string;
    }
  ];
  description: string;
  googleplaylink: string;
  gitlink: string;
  tags: [];
  // mainImg: string;
  cover: string;
  type: string;
  _id: string;
};
export const GooglePlayScreen = () => {
  const [data, getData] = useState<resultProps[]>([]);

  useEffect(() => {
    axios
      .get("https://ginger-nono-qwar.vercel.app/projects")
      .then((response) => {
        //  🚀 Launch your request or whatever
        getData(response.data["result"]);
      })
      .catch((error) => {});
  }, []);
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      {data.length ? (
        data.map((project) =>
          project.googleplaylink !== "undefined" ? (
            <motion.div
              className="projects-card"
              whileHover={{ scale: 1.1 }}
              animate={{ y: -10 }}
              transition={{ duration: 1 }}
              onClick={() =>
                navigate("/project-details", {
                  state: {
                    title: project.title,
                    description: project.description,
                    images: project.images,
                    googlePlayLink: project.googleplaylink,
                    gitLink: project.gitlink,
                    tags: project.tags,
                    type: project.type,
                  },
                })
              }
            >
              <div className="con-container">
                <img
                  src={project.cover}
                  width="300px"
                  height="400px"
                  alt="main"
                />
                <h4>{project.title}</h4>
                <p className="desc">{project.description}</p>
              </div>
            </motion.div>
          ) : (
            <div></div>
          )
        )
      ) : (
        <Box  className="skeleton-container">
        <Skeleton
         variant="rounded"
         className="skeleton"
       />
       <Skeleton
         variant="rounded"
         className="skeleton"
       />
       <Skeleton
         variant="rounded"
         className="skeleton"
       />
    </Box>
      )}
    </div>
  );
};
