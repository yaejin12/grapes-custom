import React from "react";
import GrapesEditor from "../components/editor/GrapesEditor";
import CustomPieChart from "../components/chart/pieChart/CustomPieChart";
import CustomBarChart from "../components/chart/barChart/CustomBarChart";

function RootLayout() {
  return (
    <>
      <header></header>
      <main>
        <GrapesEditor />
        <CustomPieChart />
        <CustomBarChart />
      </main>
    </>
  );
}

export default RootLayout;
