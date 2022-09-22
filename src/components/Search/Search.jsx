import React from "react";
import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.container}>
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className={styles.root}
        placeholder="Найди свою!.."
      />
      <button className={styles.btn} onClick={() => setSearchValue("")}>
        Очистить
      </button>
    </div>
  );
};

export default Search;
