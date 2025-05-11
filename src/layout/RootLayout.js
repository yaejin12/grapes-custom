import React from "react";
import GrapesEditor from "../components/editor/GrapesEditor";
import CustomPieChart from "../components/chart/pieChart/CustomPieChart";
import CustomBarChart from "../components/chart/barChart/CustomBarChart";
import Header from "./components/Header";
import Aside from "./components/Aside";
import styles from "./rootLayout.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import PgTitle from "../components/layout/pgTitle/PgTitle";

function RootLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  let pgTitle;
  switch (pathname) {
    case "/":
      pgTitle = "실시간현황";
      break;
    case "/status":
      pgTitle = "종합현황";
      break;
    case "/participant-group":
      pgTitle = "대상자 그룹";
      break;
    default:
      break;
  }
  return (
    <div className={styles.root_layout_wrapper}>
      <Aside styles={styles} />
      <div className={styles.content_wrapper}>
        <Header styles={styles} />
        <main>
          <div className={styles.main_content_wrapper}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
// {
//   /* <GrapesEditor />
// <CustomPieChart />
// <CustomBarChart /> */
// }
