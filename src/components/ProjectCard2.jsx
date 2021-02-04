import React from "react";
import image from "../images/weather-dashboard-screenshot.png";

const projectName = "Weather Dashboard";
const deployedAppURL = "https://mysterious-reef-08997.herokuapp.com/";
const appDetails =
  "Simple Weather Dashboard";
const technologies = "BootStrap, JQuery, Javascript, CSS";
const github = "https://github.com/chyppolitejr/weather-dashboard";

const ProjectCard2 = () => {
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

export default ProjectCard2;
