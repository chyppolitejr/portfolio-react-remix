import React from "react";

const Footer = () => {
  return (
    <div className="page-footer teal darken-2 center">
      <div className="container">
        <a href="https://www.linkedin.com/in/claude-hyppolite-jr">
          <i className="fab fa-linkedin fa-3x" style={{ paddingRight: 5 }}></i>
        </a>
        <a href="https://github.com/chyppolitejr">
          <i className="fab fa-github fa-3x"></i>
        </a>
      </div>
      <div className="footer-copyright teal darken-2">
        <div className="container center">© 2021 Claude Hyppolite Jr</div>
      </div>
    </div>
  );
};

export default Footer;
