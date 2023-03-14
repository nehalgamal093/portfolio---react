import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AOS from "aos";
import "aos/dist/aos.css";
import "./main-page.css";
import { useEffect, useState } from "react";
import axios from "axios";

type download = {
  download: string;
  _id: string;
};
export const MainPage = () => {
  const [data, getData] = useState<download[]>([]);
  useEffect(() => {}, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    axios
      .get("http://localhost:2000/projects/get-download")
      .then((response) => {
        getData(response.data);
      })
      .catch((error) => {});
  }, []);
  return (
 
      <div className="top-page">
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/in/nehal-gamal-8b9317262/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>

          <a
            href="https://github.com/nehalgamal093"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>

          <a href="mailto:nehalgamal093@gmail.com">
            <AlternateEmailIcon fontSize="large" />
          </a>
        </div>

        <motion.div
          animate={{ x: [100, -30] }}
          transition={{ duration: 5 }}
          className="image-container"
        >
          <img src={require("./Pic.png")} alt="avatar" />
        </motion.div>

        <div className="text-head" data-aos="fade-up">
          <p>My name is Nehal </p>

          <h3>Front-End / Flutter Developer</h3>
          <p className="description">
            I am Enthusiatic, Self-Motivated & Hard-Working Front-End & Mobile
            Application Developer, I am always energetic and eager to learn new
            skills, Check My Current Projects To Know More about My Skills and
            Contact me Directly
          </p>
          {data.length ? (
            data.map((downloadLink) => (
              <a href={downloadLink.download} className="cv-container">
                <span>
                  Download CV
                  <DownloadIcon
                    style={{ color: "white", verticalAlign: "middle" }}
                  />
                </span>
              </a>
            ))
          ) : (
            <div></div>
          )}

          <div className="skills-list-main">
            <ul className="skills-li">
              <li>
                <img src={require("../images/flutter.png")} alt="flutter" />
              </li>
              <li>
                <img src={require("../images/dart.png")} alt="dart" />
              </li>
              <li>
                <img src={require("../images/js.png")} alt="javascript" />
              </li>
              <li>
                <img
                  src={require("../images/typescript.png")}
                  alt="typescript"
                />
              </li>
              <li>
                <img src={require("../images/science.png")} alt="react" />
              </li>
              <li>
                <img src={require("../images/html.png")} alt="html" />
              </li>
              <li>
                <img src={require("../images/css-3.png")} alt="css" />
              </li>
              <li>
                <img src={require("../images/java.png")} alt="java" />
              </li>
              <li>
                <img src={require("../images/nodejs.png")} alt="nodejs" />
              </li>
            </ul>
          </div>
        </div>
      </div>
  
  );
};
