import React, { useState, useEffect } from "react";
import "./projectsscreens.css";
import axios from "axios";
import { useParams, Outlet } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

import Lottie from "lottie-react";
import loadingImg from "../assets/lotties/loading.json";
import astronaut from "../assets/lotties/astronaut.json";
export type resultProps = {
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
export const ProjectsScreen = () => {
  const [data, getData] = useState<resultProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://ginger-nono-qwar.vercel.app/projects")
      .then((response) => {
        const val = response.data["result"].filter((item: resultProps) => {
          return item.type === type;
        });
        getData(val as resultProps[]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [type]);

  return (
    <div className="projects-container">
      {loading ? (
        <ProjectLoadingSkeleton />
      ) : data.length ? (
        data.map((project) => {
          return (
            <ProjectCard
              _id={project._id}
              description={project.description}
              googleplaylink={project.googleplaylink}
              gitlink={project.gitlink}
              images={project.images}
              title={project.title}
              type={project.type}
              cover={project.cover}
              tags={project.tags}
            />
          );
        })
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>No Projects Found</p>
          <Lottie loop={true} animationData={astronaut} />
        </div>
      )}
    </div>
  );
};

export const ProjectLoadingSkeleton = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie loop={true} animationData={loadingImg} height={400} width={400} />
    </div>
  );
};
