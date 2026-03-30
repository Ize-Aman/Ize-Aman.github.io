import React from "react";
import { motion } from 'motion/react';
import Button from "./Button";

import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectCard = ({ image, projects, isActive, onActivate }) => {
  const { title, description, github, deployment } = projects
  return (
    <motion.div
      className="projects-card"
      onTap={onActivate}
      animate={
        isActive ? { scale: 1.03, boxShadow: "0 2px 8px 1px #431f47" } : { scale: 1, boxShadow: "0 0 0 0 transparent" }
      }
      whileHover={{ scale: 1.03, boxShadow: "0 2px 8px 1px #431f47" }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      <img src={image} className="w-95" alt="project image" />

      <div className="project-info">
        <h3> {title} </h3>
        <p> {description} </p>

        <div className="flex justify-around">
          <Button link={github} text="Github" icon={<FaGithub size={19} />} />
          {
            deployment ?
              (<Button link={deployment} text="Demo" icon={<CgFileDocument size={19} />} />) :
              (null)
          }
        </div>
      </div>
    </motion.div>
  )
};

export default ProjectCard;
