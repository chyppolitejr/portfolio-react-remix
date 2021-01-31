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
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/portfolio-react-remix" component={Home} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
