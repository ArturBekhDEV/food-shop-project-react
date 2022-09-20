import "./App.css";
import React, { useState, useEffect } from "react";
import "../src/scss/app.scss";
import Cart from "../src/components/pages/Cart";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import NotFoundBlock from "./components/Notfound/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
