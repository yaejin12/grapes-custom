import React from "react";
import styles from "./label.module.scss";
function InfoLabel({ label, tag }) {
  const iconImg = () => {
    if (label === "대상자") return "/images/info_user.svg";
    if (label === "훈련명") return "/images/info_t_name.svg";
    if (label.includes("기간")) return "/images/info_calendar.svg";
    if (label.includes("교육")) return "/images/info_book.svg";
    if (label.includes("템플릿")) return "/images/info_template.svg";
    if (label.includes("위반기준")) return "/images/info_v.svg";
  };

  return (
    <div
      className={`${styles.label_wrapper} ${
        tag ? styles.hash_tag_label_wrapper : ""
      }`}
    >
      <div className={styles.label_group}>
        <i>
          <img src={iconImg()} loading="lazy" />
        </i>
        <div className={styles.label}>{label}</div>
      </div>
      {tag && <div className={styles.label_tag}>{tag}</div>}
    </div>
  );
}

export default InfoLabel;
