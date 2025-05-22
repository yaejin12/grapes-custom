import React from "react";
import styles from "./Loading.module.scss";

function Loading({}) {
  return (
    <div className={styles.loading_wrapper}>
      <div className={styles.loading_icon}>
        <img src="/images/loader.svg" alt="로딩중" />
      </div>
      <p className={styles.loading_text}>PDF 로딩 중...</p>
    </div>
  );
}

export default Loading;
