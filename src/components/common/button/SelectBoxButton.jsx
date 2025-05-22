import React from "react";
import styles from "./button.module.scss";

function SelectBoxButton({ btnType, onClick, isChecked, ...props }) {
  const actionBtnType = {
    delete: {
      label: "삭제",
      img: "/images/select_box_X.svg",
    },
    checkBox: {
      label: "선택유무",
      img: "/images/item_check.svg",
      styleType: "inactive",
    },
  };
  return (
    <button
      className={`${styles.select_box_btn} ${
        styles[actionBtnType?.[btnType]?.styleType] || ""
      } ${isChecked ? styles.action : ""}`}
      onClick={onClick}
      {...props}
    >
      <img
        src={actionBtnType?.[btnType]?.img}
        alt={actionBtnType[btnType]?.label}
      />
    </button>
  );
}

export default SelectBoxButton;
