import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div>
      <input className={styles.root} placeholder="Найди свою!.." />
      <button>Найди!</button>
    </div>
  );
};

export default Search;
