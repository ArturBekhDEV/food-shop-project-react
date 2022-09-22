import React from "react";
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlock from "../Pizzablock/PizzaBlock";
import Skeleton from "../Pizzablock/Skeleton";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sort: "rating",
  });

  useEffect(() => {
    const order = sortType.sort.includes("-") ? "asc" : "desc";
    const sortByMinus = sortType.sort.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    setIsLoading(true);

    const pizzaItems = fetch(
      `https://6323608c5c1b43572794bb2a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortByMinus}&order=${order}`
    );
    pizzaItems
      .then((res) => {
        return res.json();
      })
      .then((pizzas) => {
        setItems(pizzas);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(index) => setCategoryId(index)}
        />
        <Sort value={sortType} onClickSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangeProp={(num) => setCurrentPage(num)} />
    </div>
  );
};

export default Home;
