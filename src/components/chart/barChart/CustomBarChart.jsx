import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartCustomTooltip from "./components/ChartCustomTooltip";
import { useLocation } from "react-router-dom";

function CustomBarChart({}) {
  const pathname = useLocation().pathname;
  const isResultDetailPg = pathname.startsWith("/result-training");
  const data = [
    {
      name: "메일열람",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "링크클릭",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "파일다운",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "피싱작성",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "신고서 제출",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "교육이수",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={isResultDetailPg ? 300 : 393}>
      {/* BarChart - 차트 전체를 감싸는 */}
      <BarChart
        data={data}
        barCategoryGap={10}
        barGap={0}
        barSize={isResultDetailPg ? 43 : 56}
        height={361}
      >
        {/*  격자선 (가로선만, 세로선 제거) */}
        <CartesianGrid vertical={false} stroke="#E4E4E4" />
        {/* 막대 */}
        <Bar
          dataKey="pv"
          fill="var(--color-point)"
          background={{ fill: "var(--color-gr-5)" }}
          animationDuration={900}
          animationEasing="ease-out"
        />
        <XAxis
          dataKey="name"
          tickLine={false}
          dy={12}
          tick={{ fontSize: 14, fill: "#555555" }}
        />
        <YAxis axisLine={false} tickLine={false} />
        {/* Tooltip - 호버 시 정보 표시 */}
        <Tooltip
          content={<ChartCustomTooltip />}
          cursor={{
            fill: "none",
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
