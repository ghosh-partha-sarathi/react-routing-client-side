import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Expenses from "./components/expenses/Expenses";
import Invoices from "./components/invoices/Invoices";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("appMain")
);

// const rootElement = document.getElementById("mountNode");
// ReactDOM.hydrate(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/expenses" element={<Expenses />} />
//       <Route path="/invoices" element={<Invoices />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("appMain")
// );
