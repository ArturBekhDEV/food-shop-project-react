import "./App.css";
import React, { useState, useEffect } from "react";
import "../src/scss/app.scss";
import Cart from "../src/components/pages/Cart";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import NotFoundBlock from "./components/Notfound/Index";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";

export const searchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      {/* <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </searchContext.Provider> */}
    </div>
  );
}

export default App;
