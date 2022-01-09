import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const activeNavStyle = { color: "#F15B2A" };
  return (
    <div className="jumbotron">
      <br />
      <br />
      <nav>
        <NavLink to="/" activestyle={activeNavStyle}>
          Home
        </NavLink>{" "}
        {" | "}
        <NavLink to="/about" activestyle={activeNavStyle}>
          About
        </NavLink>{" "}
        {" | "}
        <NavLink to="/counter" activestyle={activeNavStyle}>
          Click Counter
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
