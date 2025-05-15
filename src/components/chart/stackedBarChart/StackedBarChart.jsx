import React from "react";
import styles from "../chart.module.scss";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTick from "./components/CustomTick";
import ChartCustomTooltip from "./components/ChartCustomTooltip";
function StackedBarChart({}) {
  const data = [
    {
      name: "고객데이터보안관리",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 0,
      phishingInputAt: 0,
      reportSubmittedAt: 0,
      educationCompletedAt: 0,
    },

    {
      name: "정보보호및준법감시팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 0,
      phishingInputAt: 1,
      reportSubmittedAt: 0,
      educationCompletedAt: 1,
    },
    {
      name: "서비스UIUX디자인개발팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "서비스UIUX디자인개발팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "서비스UIUX디자인개발팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "서비스UIUX디자인개발팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "서비스UIUX디자인개발팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "서비스UIUX디자인개발팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "UIUX디자인임임ㅁ",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "서비스 UIUX디자인",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "서비스UIUX디자인개발팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
    {
      name: "서비스UIUX디자인개발팀",
      emailOpenedAt: 1,
      linkClickedAt: 1,
      attachmentDownloadedAt: 1,
      phishingInputAt: 0,
      reportSubmittedAt: 1,
      educationCompletedAt: 1,
    },
  ];

  return (
    <div className={styles.stacked_bar_chart_wrapper}>
      <ResponsiveContainer
        width={data.length < 15 ? "100%" : data?.length * 100}
        height={293}
      >
        <BarChart
          data={data}
          barSize={40}
          width={data.length < 15 ? "100%" : data?.length * 80}
          height={293}
          barCategoryGap="10%"
        >
          {/*  격자선 (가로선만, 세로선 제거) */}
          <CartesianGrid vertical={false} stroke="#E4E4E4" />
          <Bar
            dataKey="educationCompletedAt"
            stackId="a"
            fill="var(--color-gr-2)"
          />
          <Bar
            dataKey="reportSubmittedAt"
            stackId="a"
            fill="var(--color-orange)"
          />
          <Bar
            dataKey="phishingInputAt"
            stackId="a"
            fill="var(--color-purple)"
          />
          <Bar
            dataKey="attachmentDownloadedAt"
            stackId="a"
            fill="var(--color-yellow)"
          />
          <Bar dataKey="linkClickedAt" stackId="a" fill="var(--color-red)" />
          <Bar dataKey="emailOpenedAt" stackId="a" fill="var(--color-point)" />
          <XAxis
            dataKey="name"
            tickLine={false}
            dy={12}
            interval={0}
            tick={<CustomTick />}
          />
          <YAxis axisLine={false} tickLine={false} />

          {/* Tooltip - 호버 시 정보 표시 */}
          <Tooltip
            content={<ChartCustomTooltip type={"bar"} />}
            cursor={{
              fill: "none",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StackedBarChart;
