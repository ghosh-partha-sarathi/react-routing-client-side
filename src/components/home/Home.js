import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is application Home Page.
      <br />
      <br />
      <Link to="about">About Page</Link>
    </div>
  );
}

export default Home;
