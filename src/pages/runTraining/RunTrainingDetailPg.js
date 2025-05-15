import React from "react";
import styles from "./runTraining.module.scss";
import RunDetailLeftContent from "./components/RunDetailLeftContent";
import RunDetailRightContent from "./components/RunDetailRightContent";

function RunTrainingDetailPg({ data }) {
  return (
    <div className={styles.run_detail_wrapper}>
      <div className={styles.left_wrapper}>
        <RunDetailLeftContent styles={styles} />
      </div>
      <div className={styles.right_wrapper}>
        <RunDetailRightContent styles={styles} />
      </div>
    </div>
  );
}

export default RunTrainingDetailPg;
