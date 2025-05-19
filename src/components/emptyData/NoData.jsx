import React from "react";
import styles from "./emptyData.module.scss";
function NoData({ text }) {
  return (
    <div className={styles.no_user_wrapper}>
      <div className={styles.no_user_box}>
        <div className={styles.icon}>
          <img src="/images/no_user.svg" alt="" />
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default NoData;
