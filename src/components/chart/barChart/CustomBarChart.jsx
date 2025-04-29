import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BarChartCustomTooltip from "./components/BarChartCustomTooltip";

function CustomBarChart({}) {
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
    <ResponsiveContainer width={870} height={390}>
      {/* BarChart - 차트 전체를 감싸는 */}
      <BarChart
        data={data}
        barCategoryGap={10}
        barGap={0}
        barSize={43}
        height={300}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          dy={10}
          padding={{ left: 40, right: 40 }}
        />
        <YAxis />
        {/* Tooltip - 호버 시 정보 표시 */}
        <Tooltip
          content={<BarChartCustomTooltip />}
          cursor={{
            fill: "rgba(146, 146, 146, 0.15)",
          }}
        />
        {/*  격자선 (가로선만, 세로선 제거) */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        {/* 막대 */}
        <Bar
          dataKey="pv"
          fill="var(--color-point)"
          background={{ fill: "rgba(47, 128, 236, 0.15)" }}
          animationDuration={900}
          animationEasing="ease-out"
          shape={({ x, y, width, height, fill }) => {
            const radius = 5; // 둥글기 정도
            return (
              <path
                d={`
                  M ${x} ${y + radius}
                  Q ${x} ${y} ${x + radius} ${y}
                  L ${x + width - radius} ${y}
                  Q ${x + width} ${y} ${x + width} ${y + radius}
                  L ${x + width} ${y + height}
                  L ${x} ${y + height}
                  Z
                `}
                fill={fill}
              />
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
