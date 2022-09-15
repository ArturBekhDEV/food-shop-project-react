import "./App.css";
import React, { useState, useEffect } from "react";
import "../src/scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
// import pizzasItems from "../src/assets/pizza.json";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const pizzaItems = fetch(
      "https://6323608c5c1b43572794bb2a.mockapi.io/items"
    );
    pizzaItems
      .then((res) => {
        return res.json();
      })
      .then((pizzas) => {
        setItems(pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item) => (
              <PizzaBlock key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
