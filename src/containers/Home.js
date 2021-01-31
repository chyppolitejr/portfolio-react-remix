import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Home = () => {
  return (
    <main>
      <div className="jumbotron jumbotron-fluid mt-5 bg-white"> 
        <div className="container">
          <h1 className="display-4">My Portfolio Project</h1>
          <p className="lead font-italic">
            The wheels on the bus go round and round....
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
