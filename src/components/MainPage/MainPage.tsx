import React from "react";
import "./main-page.css";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton, Box } from "@mui/material";
import axios from "axios";
type profile = {
  title: string;
  position: string;
  summary: string;
  download: string;
  gitlink: string;
  googleplaylink: string;
  email: string;
  linkedinlink: string;
  downloadcv: string;
  image: string;
  _id: string;
};
export const MainPage = () => {
  const [data, getData] = useState<profile[]>([]);
  useEffect(() => {}, []);

  useEffect(() => {
    axios
      .get("https://ginger-nono-qwar.vercel.app/profiles")
      .then((response) => {
        getData(response.data["result"]);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="main-container">
      {/**Start Image */}
      <motion.div
        animate={{ x: [100, -30] }}
        transition={{ duration: 5 }}
        className="image-main"
      ></motion.div>
      {/**End Image */}
      {/** Start Content */}
      <div className="content-main">
        {/**Start Description */}
        {data.length ? (
          data.map((e) => (
            <div className="description-main">
              <p className="name">{e.title}</p>
              <p className="title">{e.position}</p>
              <p className="my-desc">{e.summary}</p>
            </div>
          ))
        ) : (
          <Box sx={{direction:'ltr'}}>
            <Skeleton
              variant="rounded"
             
              width={200}
              height={30}
              className="description-main"
            />
            <Skeleton
              variant="rounded"
              width={500}
              height={20}
              className="description-main"
            />

            <Skeleton
              variant="rounded"
              width={500}
              height={20}
              className="description-main"
            />
          </Box>
        )}
        {/**End Description */}
        {/**Start download */}
        {data.length ? (
          data.map((link) => (
            <div className="download-btn">
              <a
                href={link.downloadcv}
                className="cv-container"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span>
                  Download CV
                  <DownloadIcon
                    style={{ color: "white", verticalAlign: "middle" }}
                  />
                </span>
              </a>
            </div>
          ))
        ) : (
          <Skeleton variant="rectangular" width={150} height={40} />
        )}
        {/**End download */}
        {/**Start Icons */}
        {data.length ? (
          data.map((e) => (
            <div className="icons-main">
              <a href={e.linkedinlink} target="_blank" rel="noreferrer">
                <LinkedInIcon
                  style={{ color: "white", margin: "10px" }}
                  fontSize="medium"
                />
              </a>

              <a href={e.gitlink} target="_blank" rel="noreferrer">
                <GitHubIcon
                  fontSize="medium"
                  style={{ color: "white", margin: "10px" }}
                />
              </a>

              <a href={e.email}>
                <AlternateEmailIcon
                  fontSize="medium"
                  style={{ color: "white", margin: "10px" }}
                />
              </a>
            </div>
          ))
        ) : (
          <Skeleton variant="rectangular" width={200} height={20} />
        )}
        {/**End Icons */}
        {/**Start Skills */}
        <div className="skill-container">
          <img src={require("../images/flutter.png")} alt="flutter" />

          <img src={require("../images/dart.png")} alt="dart" />

          <img src={require("../images/js.png")} alt="javascript" />

          <img src={require("../images/typescript.png")} alt="typescript" />

          <img src={require("../images/science.png")} alt="react" />

          <img src={require("../images/html.png")} alt="html" />

          <img src={require("../images/css-3.png")} alt="css" />

          <img src={require("../images/java.png")} alt="java" />

          <img src={require("../images/nodejs.png")} alt="nodejs" />
        </div>
        {/**End Skills */}
      </div>
      {/** End Content */}
    </div>
  );
};
