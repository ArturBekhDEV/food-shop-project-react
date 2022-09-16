import "./App.css";
import React, { useState, useEffect } from "react";
import "../src/scss/app.scss";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import NotFoundBlock from "./components/Notfound/Index";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          {/* <Home /> */}
          {<NotFoundBlock />}
        </div>
      </div>
    </div>
  );
}

export default App;
