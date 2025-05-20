import React from "react";
import styles from "./button.module.scss";
function CountControlBtn({ btn, handlerClick, type, disabled, ...props }) {
  let iconSrc;
  switch (type) {
    case "plus":
      iconSrc = "/images/dept_num_plus.svg";
      break;
    case "minus":
      iconSrc = "/images/dept_num_minus.svg";
      break;
  }
  return (
    <button
      className={`${styles.count_control_btn}
       `}
      onClick={handlerClick}
      disabled={disabled}
      {...props}
    >
      {iconSrc && <img src={iconSrc} alt={type}></img>}
    </button>
  );
}

export default CountControlBtn;
