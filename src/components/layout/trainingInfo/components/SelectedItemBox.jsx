import React from "react";
import styles from "../trainingInfo.module.scss";

function SelectedItemBox({ title, data }) {
  let icon;
  switch (title) {
    case "대상자":
      icon = {
        item_icon: "/images/Building.svg",
        right_icon: "/images/select_icon.svg",
      };
      break;

    case "피싱":
      icon = {
        item_icon: "/images/select_mail_icon.svg",
        right_icon: "/images/select_box_X.svg",
        style: "round",
      };
      break;

    default:
      icon = {
        item_icon: "/images/select_mail_icon.svg",
        right_icon: "/images/select_mail_icon_1.svg",
      };
      break;
  }
  return (
    <div className={`${styles.selected_item_box}`}>
      <ul className={`${styles.selected_list}`}>
        {/* [s] item */}
        <li className={styles.selected_item}>
          <div className={styles.item_content}>
            <div className={styles.item_icon}>
              <img src={icon?.item_icon} alt="" />
            </div>
            <div className={styles.item_text}>광주시청</div>
          </div>
          <button
            className={`${styles.right_icon} ${styles[icon?.style] || ""}`}
          >
            <img src={icon?.right_icon} alt="" />
          </button>
        </li>
        {/* [e] item */}
      </ul>
    </div>
  );
}

export default SelectedItemBox;
