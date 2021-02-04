import React from "react";
import image from "../images/Track-finder-screenshot.png";

const projectName = "Track Finder";
const deployedAppURL = "https://polar-castle-76740.herokuapp.com/";
const appDetails =
"A full CRUD web app used for finding running/walking tracks in your area";
const technologies = "Bulma, JQuery, Javascript, CSS, Express,mySQL, npm, express-handlebars";
const github = "https://github.com/chyppolitejr/Track-Finder-App";

const ProjectCard4 = () => {
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

export default ProjectCard4;
