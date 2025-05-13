import React from "react";

function GroupSelectItem({ styles }) {
  return (
    <li className={`${styles.selected_item} ${styles.participant}`}>
      <div className={styles.item_content}>
        <div className={styles.item_icon}>
          <img src="/images/Building.svg" alt="" />
        </div>
        <div className={styles.item_text}>광주시청 전직원</div>
        <div className={styles.tag}>
          <img src="/images/user_num.svg" />
          30
        </div>
      </div>
      <button className={styles.right_icon}>
        <img src="/images/select_box_X.svg" alt="" />
      </button>
    </li>
  );
}

export default GroupSelectItem;
