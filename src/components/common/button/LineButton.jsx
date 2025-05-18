import React from "react";
import styles from "./button.module.scss";

function LineButton({ handlerClick, disabled, btn, ...props }) {
  return (
    <button
      className={`${styles.line_btn} ${btn?.img ? styles.isImg : ""} ${
        disabled ? styles.disabled : ""
      } `}
      onClick={handlerClick}
      disabled={disabled}
      {...props}
    >
      {btn?.label}
      {btn?.img && <img src={btn?.img} alt={btn?.label}></img>}
    </button>
  );
}

export default LineButton;
