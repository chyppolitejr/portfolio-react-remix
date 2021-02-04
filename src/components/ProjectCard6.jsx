import React from "react";
import image from "../images/budget-tracker-screen.png";

const projectName = "Budget Tracker";
const deployedAppURL = "https://floating-citadel-65540.herokuapp.com";
const appDetails =
"An application for tracking your income and expenses with visualizations";
const technologies = "nodejs, npm, mongodb, express, morgan and compression";
const github = "https://floating-citadel-65540.herokuapp.com";

const ProjectCard6 = () => {
  return (
    <div>
      <div className="card mb-5 mt-5">
        <img src={image} className="card-img-top" alt={projectName} />
        <div className="card-body">
          <h5 className="card-title">{projectName}</h5>
          <p className="card-text">{appDetails}</p>
          <p className="card-text">technologies: {technologies}</p>
          <p className="card-footer">
            <small className="text-muted">
              <a href={deployedAppURL} className="mr-2">
                Deployed Application
              </a>
              <a href={github}>Github Repo</a>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard6;
