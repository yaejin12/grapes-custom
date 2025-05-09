import React from "react";
import GrapesEditor from "../components/editor/GrapesEditor";
import CustomPieChart from "../components/chart/pieChart/CustomPieChart";
import CustomBarChart from "../components/chart/barChart/CustomBarChart";
import Header from "./components/Header";
import Aside from "./components/Aside";
import styles from "./rootLayout.module.scss";
import { Outlet } from "react-router-dom";

function RootLayout() {
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
