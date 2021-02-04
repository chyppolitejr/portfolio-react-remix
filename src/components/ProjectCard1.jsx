import React from "react";
import image from "../images/smith-family-adventure.png";

const projectName = "Smith Family Adventure";
const deployedAppURL = "https://chyppolitejr.github.io/smith-adventure/";
const appDetails =
  "An interactive Game based on characters from the Rick and Morty Cartoon on Adult Swim.";
const technologies = "BootStrap, JQuery, Javascript, CSS";
const github = "https://github.com/chyppolitejr/smith-adventure";

const ProjectCard1 = () => {
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

export default ProjectCard1;
