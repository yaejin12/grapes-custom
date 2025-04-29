import React from "react";
import styles from "../chart.module.scss";
import { PieChart as RePieChart, Pie, Cell, Tooltip } from "recharts";
import PieChartCustomTooltip from "./components/PieChartCustomTooltip";

function CustomPieChart({}) {
  const data = [
    { name: "Done", value: 60 },
    { name: "Remaining", value: 40 },
  ];

  const COLORS = ["var(--color-point)", "var(--color-point-sb)"];
  // -------------------
  // [s]강조용 value 계산
  const total = data.reduce((acc, cur) => acc + cur.value, 0); // 총합
  const doneData = data.find((item) => item.name === "Done"); // Done 항목
  const doneRatio = doneData ? doneData.value / total : 0; // Done 비율
  // -------------------
  return (
    <div className={styles.pie_wrapper}>
      <RePieChart width={240} height={240}>
        <Tooltip content={<PieChartCustomTooltip />} />
        {/*강조용 도넛 */}
        <Pie
          data={[{ name: "Done", value: doneData?.value || 0 }]}
          cx="50%"
          cy="50%"
          // 굵기 안쪽- 숫자가 작을수록 굵다 바깥쪽- 숫자가 클수록 굵다
          innerRadius={45}
          outerRadius={90}
          // 시작 각도, 끝 각도
          startAngle={90}
          endAngle={90 - 360 * doneRatio + 2}
          fill="var(--color-point)"
          stroke="none"
          style={{
            filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.37))",
          }}
        />
        {/* 기본 도넛*/}
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={85}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          stroke="none"
          paddingAngle={1}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
          ))}
        </Pie>
        {/* 중앙에 수동으로 텍스트 추가 */}
        <text
          x="50%"
          y="43%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="13px"
        >
          위험도
        </text>
        <text
          x="50%"
          y="53%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="23px"
          fontWeight="bold"
          fill="var(--color-point)"
        >
          100%
        </text>
      </RePieChart>
    </div>
  );
}

export default CustomPieChart;
