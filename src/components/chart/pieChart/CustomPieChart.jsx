import React from "react";
import styles from "../chart.module.scss";
import { PieChart as RePieChart, Pie, Cell, Tooltip } from "recharts";
import ChartCustomTooltip from "../barChart/components/ChartCustomTooltip";

function CustomPieChart({ size }) {
  const isSmSize = size === "sm";
  const data = [
    { name: "Done", value: 60 },
    { name: "Remaining", value: 40 },
  ];

  const COLORS = ["var(--color-red)", "var(--color-red-2)"];

  // -------------------
  // [s]강조용 value 계산
  const total = data.reduce((acc, cur) => acc + cur.value, 0); // 총합
  const doneData = data.find((item) => item.name === "Done"); // Done 항목
  const doneRatio = doneData ? doneData.value / total : 0; // Done 비율
  // -------------------
  return (
    <div className={styles.pie_wrapper}>
      <RePieChart width={isSmSize ? 250 : 300} height={isSmSize ? 250 : 300}>
        <Tooltip content={<ChartCustomTooltip />} />
        {/*강조용 도넛 */}
        <Pie
          data={[{ name: "Done", value: doneData?.value || 0 }]}
          cx="50%"
          cy="50%"
          // 굵기 안쪽- 숫자가 작을수록 굵다 바깥쪽- 숫자가 클수록 굵다
          innerRadius={isSmSize ? 52.5 : 58.5}
          outerRadius={isSmSize ? 108.5 : 124}
          // 시작 각도, 끝 각도
          startAngle={90}
          endAngle={90 - 360 * doneRatio}
          fill="var(--color-red)"
          stroke="none"
          style={{
            filter: "drop-shadow(0px 4px 6px rgba(237, 71, 71,0.5))",
          }}
        />
        {/* 기본 도넛*/}
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={isSmSize ? 55.5 : 64.5}
          outerRadius={isSmSize ? 105.5 : 118}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
          ))}
        </Pie>
        {/* 중앙에 수동으로 텍스트 추가 */}
        <text
          x="50%"
          y="43.5%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={isSmSize ? "13px" : "14px"}
          fontWeight={600}
          fill="var(--color-gr-3)"
          style={{ letterSpacing: "-0.3px" }}
        >
          위반율
        </text>
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={isSmSize ? "26px" : "28px"}
          fontWeight={700}
          fontFamily="'Spoqa Han Sans', sans-serif"
        >
          20%
        </text>
      </RePieChart>
    </div>
  );
}

export default CustomPieChart;
