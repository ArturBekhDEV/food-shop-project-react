import React, { useState } from "react";
import "../scss/components/_categories.scss";

const Categories = ({ value, onClickCategory }) => {
  const categories = [
    "Все",
    "Вегетерианские",
    "С мясом",
    "Гриль",
    "Острые",
    "Закритые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? "active" : " "}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
