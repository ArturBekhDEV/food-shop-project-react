import React, { useState } from "react";
import "../scss/components/_categories.scss";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Всі",
    "Вегетиріанські",
    "М`ясні",
    "Гриль",
    "Гострі",
    "Закриті",
  ];

  const onClickFunction = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            onClick={() => onClickFunction(index)}
            className={activeIndex === index ? "active" : " "}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
