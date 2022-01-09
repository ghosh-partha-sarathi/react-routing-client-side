import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import bootstrap from "bootstrap";
import Header from "./common/Header";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <p>App Main Page</p>
      <Outlet />
    </div>
  );
}
