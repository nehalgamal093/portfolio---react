import React, { useState, useEffect } from "react";
import "./projectsscreens.css";
import { CircularProgress } from "@mui/material";

import axios from "axios";
import { useParams ,Outlet} from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

export type resultProps = {
  name: string;
  images: [];
  desc: string;
  googlePlayLink: string;
  gitLink: string;
  tags: [];
  mainImg: string;
  type: string;
  _id: string;
};
export const ProjectsScreen = () => {
  const [data, getData] = useState<resultProps[]>([]);
  const { type } = useParams();
  useEffect(() => {
    axios
      .get("https://portfolio-d3gj33sv9-nehalgamal093.vercel.app/projects/get-project")
      .then((response) => {

        const val = response.data.filter((item: resultProps) => {


          return item.type === type;
        });
        getData(val as resultProps[]);
   
      })
      .catch((error) => {

      });
  }, [type]);

  return (
    <div className="projects-container">
      {data ? (
        data.map((project) => {
          console.log(`${type}`);
          console.log(`${project.name}`);
          return (
            <ProjectCard
              _id={project._id}
              desc={project.desc}
              googlePlayLink={project.googlePlayLink}
              gitLink={project.gitLink}
              images={project.images}
              name={project.name}
              type={project.type}
              mainImg={project.mainImg}
              tags={project.tags}
            />
          );
        })
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <CircularProgress />
        </div>
      )}
      
    </div>
  );
};
