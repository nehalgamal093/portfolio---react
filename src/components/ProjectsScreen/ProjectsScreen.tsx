import React, { useState, useEffect } from "react";
import "./projectsscreens.css";
import { CircularProgress } from "@mui/material";

import axios from "axios";
import { useParams, Outlet } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import {Skeleton,Box} from '@mui/material'
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
  const { type } = useParams();
  useEffect(() => {
    axios
      .get("https://ginger-nono-qwar.vercel.app/projects")
      .then((response) => {
        const val = response.data["result"].filter((item: resultProps) => {
          return item.type === type;
        });
        getData(val as resultProps[]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);

  return (
    <div className="projects-container">
      {data.length ? (
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
      
         <Box className="skeleton-container">
             <Skeleton
              variant="rounded"
          
            className= 'skeleton'

            />
            <Skeleton
              variant="rounded"
             className= 'skeleton'
     
            />
            <Skeleton
              variant="rounded"
             className= 'skeleton'
           
            />
         </Box>

      )}
    </div>
  );
};
