import React, { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h4> About </h4>
      <br />
      <br />
      <Link to="home" className="btn btn-primary btn-lg">
        Home Page
      </Link>
    </div>
  );
}

export default About;
