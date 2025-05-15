import React from "react";
import PgTitle from "../../../components/layout/pgTitle/PgTitle";
import styles from "./LiveStatus.module.scss";
import StatNumItem from "../../../components/layout/statNumItem/StatNumItem";
import CustomBarChart from "../../../components/chart/barChart/CustomBarChart";
import PieChartNum from "../../../components/chart/pieChart/PieChartNum";
import CustomPieChart from "../../../components/chart/pieChart/CustomPieChart";
import DashboardSelectBox from "../../../components/common/selectBox/DashboardSelectBox";
import TrainingInfo from "../../../components/layout/trainingInfo/TrainingInfo";

function LiveStatusPg() {
  return (
    <>
      <PgTitle h3={"실시간 현황"}>
        <div className={styles.dashboard_content_wrapper}>
          <div className={styles.dashboard_left_wrapper}>
            <section className={styles.dashboard_num_wrapper}>
              <StatNumItem label={"훈련참가인원"} num={"29,895"} />
              <StatNumItem label={"위반자 현황"} num={"29,895"} />
              <StatNumItem label={"총 위반 건수"} num={"29,895"} />
            </section>
            <section className={styles.dashboard_chart_wrapper}>
              <div className={styles.dashboard_bar_chart_wrapper}>
                <h4 className={styles.box_title}>훈련 위반</h4>
                <div className={styles.bar_chart_wrapper}>
                  <CustomBarChart />
                </div>
              </div>
              <div className={styles.dashboard_pie_chart_wrapper}>
                <h4 className={styles.box_title}>훈련 위반율</h4>
                <div className={styles.dashboard_v_chart_contents_wrapper}>
                  <div className={styles.dashboard_v_pie_chart_wrapper}>
                    <PieChartNum />
                    <div className={styles.pie_chart}>
                      <CustomPieChart size={"sm"} />
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
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.dashboard_right_wrapper}>
            <div className={styles.dashboard_select_wrapper}>
              <DashboardSelectBox placeholder={"실행중인 훈련 선택하기"} />
            </div>
            <div className={styles.dashboard_t_info_wrapper}>
              <h4 className={styles.box_title}>훈련 정보</h4>

              <TrainingInfo />
            </div>
          </div>
        </div>
      </PgTitle>
    </>
  );
}

export default LiveStatusPg;
