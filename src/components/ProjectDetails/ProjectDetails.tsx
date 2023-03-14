import React from "react";
import { useLocation } from "react-router-dom";
import "./projectdetails.css";
import { Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
export const ProjectDetails = () => {
  const location = useLocation();
  console.log(location.state.type);
  return (
    <div className="project-screen-container">
      <div className="details-container">
        <motion.h1 animate={{ y: -10 }} transition={{ duration: 1 }}>
          {location.state.name}
        </motion.h1>
        <motion.p animate={{ y: -10 }} transition={{ duration: 1 }}>
          {location.state.desc}
        </motion.p>
        <Stack
          component={motion.div}
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 2 }}
          spacing={1}
          direction="row"
        >
          {location.state.tags.length ? (
            location.state.tags.map((tag: string) => (
              <Chip
                label={tag}
                variant="filled"
                style={{ color: "white", background: "rgba(8, 8, 8, 0.288)" }}
              />
            ))
          ) : (
            <div></div>
          )}
        </Stack>
        <div className="icon-container">
          {location.state.gitLink === "" ? (
            <a
              href={location.state.googlePlayLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./google-play.png")} alt="googleplay link" />
            </a>
          ) : (
            <a href={location.state.gitLink} target="_blank" rel="noreferrer">
              <img
                src={require("./github.png")}
                alt="github project link"
                color="white"
              />
            </a>
          )}
        </div>
      </div>

      <div className="img-list">
        {location.state.images.length ? (
          location.state.images.map((img: string) => (
            <motion.img
              animate={{ x: 20, opacity: 1 }}
              initial={{ opacity: 0.5 }}
              transition={{ duration: 3 }}
              alt="location.name"
              src={img}
              style={{
                width: location.state.type === "flutter" ? "10%" : "50%",
                height: location.state.type === "flutter" ? "40%" : "10%",
              }}
            />
   
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
