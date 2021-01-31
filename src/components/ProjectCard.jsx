import React from "react";
import projects from "../data/projects.json";

const ProjectCard = () => {
  return (
      <div className="row row-cols-6 row-cols-md-3 g-6">
          
      {projects.map(project => (
          <div className="col">
        <div key={project.id} className="card m-4" style={{width: "20rem"}}>
        <img src={project.image} className="card-img-top" alt={project.projectName} />
        <div className="card-body">
            <p className="card-title">{project.projectName}</p>
          <small className="card-text"> {project.details} </small>
          <p className="card-text">
          <a href={project.deployedApplication}></a>
          </p>
         
        </div>
      </div>
      </div>
      ))}

    </div>
  );
};

export default ProjectCard;
