import React from "react";


const ProjectCard = ({ image, projects }) => {
  const { title, description } = projects
  return (
    <div className="projects-card" >
      <img src={image} className="w-80" alt="" />

      <div className="project-info">
        <h3> {title} </h3>
        <p> {description} </p>
      </div>
    </div>
  )
};

export default ProjectCard;
