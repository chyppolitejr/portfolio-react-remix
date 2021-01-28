import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects.js";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <header>
          {" "}
          <Navbar />{" "}
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </main>
      </Router>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
