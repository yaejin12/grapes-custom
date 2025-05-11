import React from "react";
import styles from "./button.module.scss";

function Button({ label, handlerClick, type, ...props }) {
  let btn;
  switch (label) {
    case "엑셀다운":
      btn = {
        img: "/images/table_download.svg",
        btnStyle: "",
      };
      break;
    case "출력하기":
      btn = {
        img: "/images/table_printer.svg",
        btnStyle: styles.printer,
      };
      break;

    case "대상자 신규등록":
      btn = {
        img: "/images/participant_group_add.svg",
        btnStyle: styles.point_color,
      };
      break;

    case "부서별 랜덤등록":
      btn = {
        img: "/images/participant_group_random_add.svg",
        btnStyle: styles.dark_point_color,
      };
      break;

    case "엑셀파일 업로드":
      btn = {
        img: "/images/file_upload.svg",
        btnStyle: styles.gr_color,
      };
      break;

    case "수정":
      btn = {
        btnStyle: styles.modify,
      };
      break;

    case "삭제":
      btn = {
        btnStyle: styles.delete,
      };
      break;

    default:
      break;
  }

  let typeStyle;
  switch (type) {
    case "table":
      typeStyle = styles.table;
      break;

    case "add":
      typeStyle = styles.add;
      break;

    default:
      typeStyle = "";
      break;
  }
  return (
    <button
      className={`${styles.btn} ${typeStyle} ${btn?.btnStyle} `}
      onClick={handlerClick}
      {...props}
    >
      {label}
      {btn?.img && <img src={btn?.img} alt={label}></img>}
    </button>
  );
}

export default Button;
