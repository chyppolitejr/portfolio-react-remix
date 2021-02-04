import React from "react";
import image from "../images/fitnessTrackDash.png";

const projectName = "Fitness Tracker";
const deployedAppURL = "https://arcane-gorge-03230.herokuapp.com/";
const appDetails =
  "nodejs, npm, mongoose mongodb";
const technologies = "nodejs, npm, mongoose mongodb";
const github = "https://github.com/chyppolitejr/fitness-tracker";

const ProjectCard5 = () => {
  return (
    <div>
      <div className="card mb-5 mt-5">
        <img src={image} className="card-img-top" alt={projectName} />
        <div className="card-body">
          <h5 className="card-title">{projectName}</h5>
          <p className="card-text">{appDetails}</p>
          <p className="card-text">Technologies: {technologies}</p>
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

export default ProjectCard5;
