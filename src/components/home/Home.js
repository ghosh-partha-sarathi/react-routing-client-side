import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="jumbotron">
      <h4> Home </h4>
      <h5>This is a parent component</h5>
      <br />
      <Link to="about" className="btn btn-primary btn-lg">
        About Page
      </Link>
    </div>
  );
}

export default Home;
