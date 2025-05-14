import React from "react";
import styles from "../layout.module.scss";

function SelectedItemBox({ title }) {
  let icon;
  switch (title) {
    case "대상자":
      icon = {
        item_icon: "/images/Building.svg",
        right_icon: "/images/select_icon.svg",
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
            <div className={styles.item_text}>
              광주시청 전직원광주시청 전직원 광주시청 전직원 광주시청 전직원
              광주시청 전직원 광주시청 전직원
            </div>
          </div>
          <button className={styles.right_icon}>
            <img src={icon?.right_icon} alt="" />
          </button>
        </li>
        {/* [e] item */}
      </ul>
    </div>
  );
}

export default SelectedItemBox;
