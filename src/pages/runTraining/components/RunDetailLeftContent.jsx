import React from "react";
import StatusBar from "./StatusBar";
import TrainingInfo from "../../../components/layout/trainingInfo/TrainingInfo";

function RunDetailLeftContent({ styles }) {
  return (
    <div className={styles.left_inner}>
      <div className={styles.training_name}>
        <span>광주시청_2차훈련</span>
      </div>
      {/* 훈련 게이지 */}
      <div className={styles.status_wrapper}>
        <StatusBar style={"detail"} />
      </div>
      <div className={styles.left_bottom_wrapper}>
        <TrainingInfo />
      </div>
    </div>
  );
}

export default RunDetailLeftContent;
