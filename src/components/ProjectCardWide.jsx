import React from "react";
import projects from "../data/projects.json"

const ProjectCardWide = () => {
  return (
    <div>
        {projects.map(project => (
            <div className="card mb-5 mt-5">
            <img src={project.image} className="card-img-top" alt={project.projectName} />
            <div className="card-body">
              <h5 className="card-title">{project.projectName}</h5>
              <p className="card-text">
                {project.details}
              </p>
              <p className="card-footer">
                <small className="text-muted">
                    <a href={project.deployedApplication} className="mr-2">Deployed Application</a>
                    <a href={project.github}>Github Repo</a>
                </small>
              </p>
            </div>
          </div>
        ))}
      
    </div>
  );
};

export default ProjectCardWide;
