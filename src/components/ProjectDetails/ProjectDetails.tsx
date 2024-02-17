import React from "react";
import { useLocation } from "react-router-dom";
import "./projectdetails.css";
import { Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";

export const ProjectDetails = () => {
  const location = useLocation();

  return (
    <div className="project-screen-container">
      <div className="details-container">
        <motion.h1
          animate={{ y: -10 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: "0px" }}
        >
          {location.state.title}
        </motion.h1>
        <motion.p
          animate={{ y: -10 }}
          transition={{ duration: 1 }}
          className="project-desc"
        >
          {location.state.description}
        </motion.p>
        <Stack
          component={motion.div}
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 2 }}
          spacing={1}
          direction="row"
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {location.state.tags.length ? (
            location.state.tags.map((tag: string) => (
              <Chip
                label={tag}
                variant="filled"
                style={{
                  color: "white",
                  background: "rgba(8, 8, 8, 0.288)",
                  margin: "5px",
                }}
              />
            ))
          ) : (
            <div></div>
          )}
        </Stack>
        <div className="icon-container">
          {location.state.googleplaylink === "undefined" ? (
            <a href={location.state.gitlink} target="_blank" rel="noreferrer">
              <img
                src={require("./github.png")}
                alt="github project link"
                color="white"
              />
            </a>
          ) : (
            <a
              href={location.state.googlePlayLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./google-play.png")} alt="googleplay link" />
            </a>
          )}
        </div>
      </div>

      <div className="img-list">
        {location.state.images.length ? (
          location.state.images.map((img: any) => (
            <motion.img
              animate={{ x: 20, opacity: 1 }}
              initial={{ opacity: 0.5 }}
              transition={{ duration: 3 }}
              alt="location.name"
              src={img.attachment_file}
              style={{
                width: location.state.type === "react" ? "40vw" : "13vw",
                height: location.state.type === "react" ? "30vw" : "30vw",
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
