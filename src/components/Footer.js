import React from "react";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom navbar-light bg-light text-center">
      <div className="container-fluid">
        <a href="https://www.linkedin.com/in/claude-hyppolite-jr">
          <i className="fab fa-linkedin fa-3x" style={{ paddingRight: 10 }}></i>
        </a>
        <a href="https://github.com/chyppolitejr">
          <i className="fab fa-github fa-3x" style={{ paddingRight: 10 }}></i>
        </a>
        <a href="mailto:claude.hyppolite@gmail.com">
          <i className="far fa-envelope fa-3x" style={{ paddingRight: 10 }}></i>
        </a>
       <a href="tel:954-471-3652"> 
       <i className="fas fa-phone fa-3x" style={{ paddingRight: 10 }}></i>
       </a>
       <a href="Chyppolite-Resume.pdf"> 
       <i className="far fa-file-pdf fa-3x" style={{ paddingRight: 10 }}></i>
       </a>
      </div>
      <div className="footer-copyright">
        <div className="container center">© 2021 Claude Hyppolite Jr</div>
      </div>
    </footer>
  );
};

export default Footer;
