import React from "react";
import styles from "./selectBox.module.scss";

function SelectBox({ onChange, selectValue = "", placeholder, ...props }) {
  const optionData = [
    { value: "apple", label: "사과" },
    { value: "banana", label: "바나나" },
    { value: "grape", label: "포도" },
  ];

  return (
    <select
      className={styles.common_select}
      onChange={onChange}
      value={selectValue}
      {...props}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {optionData &&
        optionData.map((data, index) => (
          <option key={`${data?.value}-${index}`} value={data?.value}>
            {data?.label}
          </option>
        ))}
    </select>
  );
}

export default SelectBox;
