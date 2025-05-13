import React from "react";
import styles from "./filterBox.module.scss";

function FilterBox({ data, selected = ["all"], onClick }) {
  return (
    <ul className={styles.filter_wrapper}>
      {data?.map((item) => {
        const isActive = selected.includes(item.key);
        return (
          <li
            className={isActive ? styles.action : ""}
            onClick={() => onClick?.(item?.key)}
          >
            {item?.label}
          </li>
        );
      })}
    </ul>
  );
}

export default FilterBox;
