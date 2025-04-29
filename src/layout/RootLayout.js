import React from "react";
import GrapesEditor from "../components/editor/GrapesEditor";
import CustomBarChart from "../components/chart/barChart/CustomBarChart";
import CustomPieChart from "./../components/chart/pieChart/CustomPieChart";

function RootLayout() {
  return (
    <>
      <header></header>
      <main>
        <GrapesEditor />
        <CustomBarChart />
        <CustomPieChart />
      </main>
    </>
  );
}

export default RootLayout;
