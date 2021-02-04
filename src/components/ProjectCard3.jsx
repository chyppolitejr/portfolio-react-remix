import React from "react";
import image from "../images/eat-da-burger-screenshot.png";

const projectName = "Eat Da Burger";
const deployedAppURL = "https://chyppolitejr.github.io/eat-da-burger/";
const appDetails =
  "Simple Web Application that allows you enter burgers names then devour them with a button click";
const technologies = "BootStrap, JQuery, Javascript, CSS,Express, mySQL, npm, express-handlebars";
const github = "https://github.com/chyppolitejr/burger";

const ProjectCard3 = () => {
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

export default ProjectCard3;
