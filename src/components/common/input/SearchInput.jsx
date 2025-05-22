import React from "react";
import styles from "./input.module.scss";
import { type } from "@testing-library/user-event/dist/type";

function SearchInput({
  inputStyle,
  placeholder = "궁금하신 데이터를 검색해주세요",
}) {
  return (
    <div
      className={`${styles.search_input_wrapper}  ${
        styles?.[inputStyle] || ""
      }`}
    >
      <input placeholder={placeholder}></input>
      <button>
        <img src="/images/table_search.svg" alt="" />
      </button>
    </div>
  );
}

export default SearchInput;
