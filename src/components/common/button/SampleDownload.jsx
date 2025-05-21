import React from "react";
import styles from "./button.module.scss";

function SampleDownload({ label = "엑셀 샘플 다운로드" }) {
  return (
    <button className={styles.sample_btn}>
      {label}
      <img src="/images/sample_down.svg" alt="다운로드"></img>
    </button>
  );
}

export default SampleDownload;
