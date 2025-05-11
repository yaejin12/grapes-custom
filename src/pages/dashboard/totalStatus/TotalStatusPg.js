import React from "react";
import styles from "./totalStatus.module.scss";
import CustomBarChart from "../../../components/chart/barChart/CustomBarChart";
import DashboardSelectBox from "../../../components/common/selectBox/DashboardSelectBox";
import CustomPieChart from "./../../../components/chart/pieChart/CustomPieChart";
import PgTitle from "../../../components/layout/pgTitle/PgTitle";
import StatNumItem from "../../../components/layout/statNumItem/StatNumItem";
import { useLocation } from "react-router-dom";
import PieChartNum from "../../../components/chart/pieChart/PieChartNum";
function TotalStatusPg() {
  const location = useLocation();
  const pathname = location.pathname;
  const isTotalStatusPs = pathname === "/status";
  return (
    isTotalStatusPs && (
      <>
        <div className={styles.dashboard_content_wrapper}>
          <div className={styles.dashboard_left_wrapper}>
            <div className={styles.dashboard_num_wrapper}>
              {/* [s] item */}
              <StatNumItem label={"훈련실시횟수"} num={"29,895"} />
              <StatNumItem label={"훈련참가인원"} num={"29,895"} />
              <StatNumItem label={"위반자 현황"} num={"29,895"} />
              <StatNumItem label={"총 위반 건수"} num={"29,895"} />
              {/* [e] item */}
            </div>
            <div className={styles.dashboard_bar_chart_wrapper}>
              <h4 className={styles.box_title}>훈련 위반</h4>
              <div className={styles.bar_chart_wrapper}>
                <CustomBarChart />
              </div>
            </div>
          </div>
          <div className={styles.dashboard_right_wrapper}>
            {/* select */}
            <div className={styles.dashboard_select_wrapper}>
              <DashboardSelectBox placeholder={"2025년"} />
              <DashboardSelectBox placeholder={"전체 기간"} />
              <DashboardSelectBox placeholder={"전체 기간"} />
            </div>
            <div className={styles.dashboard_v_chart_wrapper}>
              <h4 className={styles.box_title}>훈련 위반율</h4>
              <div className={styles.dashboard_v_chart_contents_wrapper}>
                {/* 차트 부분 */}
                <div className={styles.dashboard_v_pie_chart_wrapper}>
                  <PieChartNum />
                  {/* pie chart */}
                  <div className={styles.pie_chart_wrapper}>
                    <CustomPieChart />
                  </div>
                </div>
                {/* 위험 순위 */}
                <ul className={styles.risk_ranking_wrapper}>
                  {/* [s] 순위 item */}
                  <li className={styles.risk_ranking_item}>
                    <div className={styles.ranking}>
                      <span className={styles.grade}>1위</span>
                      <span>개발팀</span>
                    </div>
                    <div className={styles.num}>70 %</div>
                  </li>
                  {/* [e] 순위 item */}
                  {/* [s] 순위 item */}
                  <li className={styles.risk_ranking_item}>
                    <div className={styles.ranking}>
                      <span className={styles.grade}>2위</span>
                      <span>개발팀</span>
                    </div>
                    <div className={styles.num}>70 %</div>
                  </li>
                  {/* [e] 순위 item */}
                  {/* [s] 순위 item */}
                  <li className={styles.risk_ranking_item}>
                    <div className={styles.ranking}>
                      <span className={styles.grade}>3위</span>
                      <span>개발팀</span>
                    </div>
                    <div className={styles.num}>70 %</div>
                  </li>
                  {/* [e] 순위 item */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default TotalStatusPg;
