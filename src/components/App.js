import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";

export default function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
