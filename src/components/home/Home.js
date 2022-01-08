import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="jumbotron">
      This is application Home Page.
      <br />
      <br />
      <Link to="about" className="btn btn-primary btn-lg">
        About Page
      </Link>
    </div>
  );
}

export default Home;
