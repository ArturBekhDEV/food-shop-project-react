import "./App.css";
import React, { useState, useEffect } from "react";
import "../src/scss/app.scss";
import Cart from "../src/components/pages/Cart";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import NotFoundBlock from "./components/Notfound/Index";
import { Routes, Route } from "react-router-dom";

export const searchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </searchContext.Provider>
    </div>
  );
}

export default App;
