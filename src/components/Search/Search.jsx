import React from "react";
import { searchContext } from "../../App";
import styles from "./Search.module.scss";
import { useRef, useCallback } from "react";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(searchContext);

  const somethingRef = useRef();

  const clearAndFocuInput = () => {
    setValue("");
    setSearchValue("");
    somethingRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 1000),
    []
  );
  const onChangeInputState = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        ref={somethingRef}
        value={value}
        onChange={onChangeInputState}
        className={styles.root}
        placeholder="Найди свою!.."
      />
      <button className={styles.btn} onClick={() => clearAndFocuInput()}>
        Очистить
      </button>
    </div>
  );
};

export default Search;
