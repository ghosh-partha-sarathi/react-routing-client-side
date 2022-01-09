import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import bootstrap from "bootstrap";
import Home from "./home/Home";
import About from "./about/About";
import PageNotFound from "./common/ErrorPage";
import Header from "./common/Header";
import ClickCounter from "./counter/ClickCounter";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
