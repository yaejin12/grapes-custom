import React from "react";
import CustomBarChart from "./../../../components/chart/barChart/CustomBarChart";
import CustomPieChart from "../../../components/chart/pieChart/CustomPieChart";
import PieChartNum from "./../../../components/chart/pieChart/PieChartNum";

function ChartContainer({ styles }) {
  return (
    <div className={styles.chart_container_wrapper}>
      <div className={styles.left_wrapper}>
        <div className={styles.result_box_title}>데이터 그래프</div>
        <div className={styles.chart_box}>
          <CustomBarChart />
        </div>
      </div>
      <div className={styles.right_wrapper}>
        <div className={styles.result_box_title}>전체 위반율</div>
        <div className={styles.chart_box}>
          <div className={styles.chart}>
            <CustomPieChart size={"sm"} />
            <div className={styles.chart_num}>
              <PieChartNum />
            </div>
          </div>
          <div className={styles.info_box}>
            <div className={styles.chart_info}>
              <div className={styles.chart_info_sub_title}>
                전체 위반율<span>59%</span>
              </div>
              <ul className={styles.chart_info_table}>
                <li className={styles.chart_info_item}>
                  <div className={styles.label}>
                    <div className={styles.icon}>
                      <img src="/images/chart_info_list_1.svg" alt="" />
                    </div>
                    <span>참가자 위반율</span>
                  </div>
                  <div className={styles.chart_num}>40 %</div>
                </li>
                <li className={styles.chart_info_item}>
                  <div className={styles.label}>
                    <div className={styles.icon}>
                      <img src="/images/chart_info_list_1.svg" alt="" />
                    </div>
                    <span>참가자 위반율</span>
                  </div>
                  <div className={styles.chart_num}>40 %</div>
                </li>
                <li className={styles.chart_info_item}>
                  <div className={styles.label}>
                    <div className={styles.icon}>
                      <img src="/images/chart_info_list_1.svg" alt="" />
                    </div>
                    <span>참가자 위반율</span>
                  </div>
                  <div className={styles.chart_num}>40 %</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartContainer;
