import React, { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      This is application About Page.
      <br />
      <br />
      <Link to="home">Home Page</Link>
    </div>
  );
}

export default About;
