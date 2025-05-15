import React from "react";
import StackedBarChart from "../../../components/chart/stackedBarChart/StackedBarChart";
import StackedBarNum from "../../../components/chart/stackedBarChart/StackedBarNum";

function DeptChart({ styles }) {
  return (
    <div className={styles.dept_chart_container_wrapper}>
      <div className={styles.result_box_title}>데이터 그래프</div>
      <div className={styles.chart_box}>
        <div className={styles.chart_num_wrapper}>
          <StackedBarNum />
        </div>
        <div className={styles.chart_wrapper}>
          <StackedBarChart />
        </div>
      </div>
    </div>
  );
}

export default DeptChart;
