import React from "react";
import styles from "./button.module.scss";
import { useLocation } from "react-router-dom";

function Button({ label, handlerClick, type, ...props }) {
  const location = useLocation();
  const pathname = location.pathname;
  const isTemplatePgs =
    pathname === "/phishing-templates" ||
    pathname === "/mail-templates" ||
    pathname === "/warning-templates" ||
    pathname === "/education-templates";
  const btn = (() => {
    if (label === "엑셀다운") {
      return {
        img: "/images/table_download.svg",
        btnStyle: "",
      };
    } else if (label === "출력하기") {
      return {
        img: "/images/table_printer.svg",
        btnStyle: styles.printer,
      };
    } else if (label === "대상자 신규등록") {
      return {
        img: "/images/participant_group_add.svg",
        btnStyle: styles.point_color,
      };
    } else if (label === "부서별 랜덤등록") {
      return {
        img: "/images/participant_group_random_add.svg",
        btnStyle: styles.dark_point_color,
      };
    } else if (label === "신규등록") {
      return {
        img: "/images/templates_add.svg",
        btnStyle: styles.point_color,
      };
    } else if (label === "엑셀파일 업로드" || label === "파일 업로드") {
      return {
        img: "/images/file_upload.svg",
        btnStyle: styles.gr_color,
      };
    } else if (label === "수정하기") {
      return {
        img: "/images/participant_modify.svg",
        btnStyle: styles.point_color,
      };
    } else if (label === "수정") {
      if (isTemplatePgs) {
        return {
          img: "/images/participant_modify.svg",
          btnStyle: styles.point_color,
        };
      } else {
        return {
          btnStyle: styles.modify,
        };
      }
    } else if (label === "복사") {
      return {
        img: "/images/template_copy.svg",
        btnStyle: styles.gr_color,
      };
    } else if (label === "삭제") {
      if (isTemplatePgs) {
        return {
          img: "/images/templates_X.svg",
          btnStyle: styles.delete,
        };
      } else {
        return {
          btnStyle: styles.delete,
        };
      }
    } else if (label?.includes("선택하기")) {
      return {
        img: "/images/btn_select.svg",
        btnStyle: "",
      };
    } else if (label === "취소") {
      return {
        btnStyle: styles.gr_color,
      };
    }

    return {};
  })();

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

    case "select":
      typeStyle = styles.select;
      break;

    case "submit":
      typeStyle = styles.submit;
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
