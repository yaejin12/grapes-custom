import React from "react";
import styles from "./button.module.scss";
import { useLocation } from "react-router-dom";

function Button({ btn, handlerClick, type, disabled, ...props }) {
  const location = useLocation();
  const pathname = location.pathname;

  let typeStyle;
  switch (type) {
    case "table":
      typeStyle = styles.table;
      break;

    case "add":
      typeStyle = styles.add;
      break;

    case "template":
      typeStyle = styles.template;
      break;

    case "run":
      typeStyle = styles.run;
      break;

    case "select":
      typeStyle = styles.select;
      break;

    case "submit":
      typeStyle = styles.submit;
      break;

    case "sm_btn":
      typeStyle = styles.sm_btn;
      break;

    default:
      typeStyle = "";
      break;
  }

  return (
    <button
      className={`${styles.btn} ${typeStyle} ${styles[btn?.style] || ""} ${
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

export default Button;
