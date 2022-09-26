import React from "react";
import { searchContext } from "../../App";
import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(searchContext);

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
