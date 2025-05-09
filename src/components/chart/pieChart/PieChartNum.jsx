import React from "react";
import styles from "../chart.module.scss";

function PieChartNum({}) {
  return (
    <>
      <div className={styles.pie_chart_num_wrapper}>
        {/* [s] item */}
        <div className={styles.pie_chart_num_item}>
          <p className={styles.label}>미위반</p>
          <div className={styles.pie_chart_num}>
            <div className={styles.circle}></div>
            <span className={styles.num}>41 %</span>
          </div>
        </div>
        {/* [e] item */}
        {/* [s] item */}
        <div className={`${styles.pie_chart_num_item} ${styles.violation}`}>
          <p className={styles.label}>위반</p>
          <div className={styles.pie_chart_num}>
            <div className={styles.circle}></div>
            <span className={styles.num}>41 %</span>
          </div>
        </div>
        {/* [e] item */}
      </div>
    </>
  );
}

export default PieChartNum;
