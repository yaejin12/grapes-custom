import React from "react";
import styles from "./selectedList.module.scss";
import SelectItemButton from "../../common/button/SelectItemButton";
import Tag from "../tag/Tag";

function SelectedItem({
  styleType,
  actionBtn,
  hashTag,
  isChecked,
  icon,
  subBtn,
}) {
  const iconStyle = {
    group: {
      label: "대상자",
      src: "/images/Building.svg",
    },
    tpl: {
      label: "메일 템플릿",
      src: "/images/select_mail_icon.svg",
    },
    alert: {
      label: "경고 템플릿",
      src: "/images/info_alert.svg",
    },
    file: {
      label: "첨부파일",
      src: "/images/select_file.svg",
    },
    edu: {
      label: "교육",
      src: "/images/info_edu.svg",
    },
  };
  return (
    <>
      {/* [s] item */}
      <li
        className={`${styles.common_item} ${styles?.[styleType] || ""} ${
          isChecked ? styles.action : ""
        }`}
      >
        <div className={styles.label_wrapper}>
          <div className={styles.icon}>
            <img src={iconStyle?.[icon]?.src} alt={iconStyle?.[icon]?.label} />
          </div>
          {/* 명 */}
          <div className={styles.label_group}>
            <div className={styles.label}>광주시청</div>
            {hashTag && <Tag text={"30"} styleType={"select"} icon={"user"} />}
          </div>
        </div>
        <div className={styles.btn}>
          {subBtn && <SelectItemButton btnType={subBtn} />}
          <SelectItemButton btnType={actionBtn} />
        </div>
      </li>
      {/* [e] item */}
    </>
  );
}

export default SelectedItem;
