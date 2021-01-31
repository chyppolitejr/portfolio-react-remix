import React from "react";
import { Link, useLocation } from "react-router-dom";
// import {TabContent,TabPane,Nav,NavItem,NavLink} from 'reactstrap';
// import classnames from 'classnames';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className={
              location.pathname === "/projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
