import React from "react";
import styles from "./selectBox.module.scss";

function SelectBox({
  styleType,
  onChange,
  optionData,
  selectValue,
  placeholder,
  ...props
}) {
  return (
    <select
      className={`${styles.common_select} ${styles[styleType] || ""}`}
      onChange={(e) => onChange?.(e)}
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
