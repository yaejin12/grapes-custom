import React from "react";
import styles from "./input.module.scss";

function SearchInput() {
  return (
    <div className={styles.search_input_wrapper}>
      <input placeholder="궁금하신 데이터를 검색해주세요"></input>
      <button>
        <img src="/images/table_search.svg" alt="" />
      </button>
    </div>
  );
}

export default SearchInput;
