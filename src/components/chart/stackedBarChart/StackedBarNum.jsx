import React from "react";
import styles from "../chart.module.scss";

function StackedBarNum() {
  return (
    <div className={styles.pie_chart_num_wrapper}>
      <div className={styles.item}>
        <span></span>메일 열람
      </div>
      <div className={styles.item}>
        <span></span>링크클릭
      </div>
      <div className={styles.item}>
        <span></span>첨부파일 다운
      </div>
      <div className={styles.item}>
        <span></span>피싱작성
      </div>
      <div className={styles.item}>
        <span></span>신고서 제출
      </div>
      <div className={styles.item}>
        <span></span>교육이수
      </div>
    </div>
  );
}

export default StackedBarNum;
