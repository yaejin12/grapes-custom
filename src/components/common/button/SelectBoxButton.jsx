import React from "react";
import styles from "./button.module.scss";

function SelectBoxButton({ icon, onClick }) {
  return (
    <button className={styles.select_box_btn} onClick={onClick}>
      <img
        src={icon?.img || "/images/select_box_X.svg"}
        alt={icon?.alt || "삭제"}
      />
    </button>
  );
}

export default SelectBoxButton;
