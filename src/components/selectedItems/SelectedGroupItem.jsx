import React from "react";
import styles from "./selectedItems.module.scss";
import SelectBoxButton from "../common/button/SelectBoxButton";

function SelectedGroupItem({ styleType, actionBtn, hashTag, isChecked }) {
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
            <img src="/images/Building.svg" alt="" />
          </div>
          {/* 명 */}
          <div className={styles.label_group}>
            <div className={styles.label}>광주시청</div>
            <div className={styles.tag}>
              <img src="/images/user_num.svg" />
              30
            </div>
          </div>
        </div>
        <SelectBoxButton btnType={actionBtn} isChecked={isChecked} />
      </li>
      {/* [e] item */}
    </>
  );
}

export default SelectedGroupItem;
