import React, { useEffect, useState } from "react";
import styles from "./resultTrainingPg.module.scss";
import StatNumItem from "../../components/layout/statNumItem/StatNumItem";
import Tab from "../../components/common/tab/Tab";
import ChartContainer from "./components/ChartContainer";
import TrainingInfo from "./components/TrainingInfo";
import TableToolbar from "./../../components/layout/table/components/TableToolbar";
import Table from "./../../components/layout/table/Table";
import { DepDummyData, dummyData } from "../runTraining/data";
import DeptChart from "./components/DeptChart";

function ResultDetailPg({}) {
  const [activeTab, setActionTab] = useState("user");
  const [tableData, setTableData] = useState(dummyData);
  const label = [
    { id: "user", label: "참여자별" },
    { id: "dept", label: "부서별" },
  ];
  const handlerTabClick = (id) => {
    setActionTab(id);
  };

  const tableHeader = (activeTab) => {
    if (activeTab === "user") {
      return [
        { text: "이름", key: "name" },
        { text: "부서", key: "department" },
        { text: "직책", key: "position" },
        { text: "수신메일", key: "emailReceivedAt" },
        { text: "메일열람", key: "emailOpenedAt" },
        { text: "링크클릭", key: "linkClickedAt" },
        { text: "첨부파일 다운", key: "attachmentDownloadedAt" },
        { text: "피싱입력", key: "phishingInputAt" },
        { text: "신고서 제출", key: "reportSubmittedAt" },
        { text: "발송현황", key: "status" },
      ];
    }

    if (activeTab === "dept") {
      return [
        { text: "부서", key: "department" },
        { text: "인원수", key: "num" },
        { text: "메일열람", key: "emailOpenedAt" },
        { text: "링크클릭", key: "linkClickedAt" },
        { text: "첨부파일 다운", key: "attachmentDownloadedAt" },
        { text: "피싱입력", key: "phishingInputAt" },
        { text: "신고서 제출", key: "reportSubmittedAt" },
        { text: "교육이수", key: "educationCompletedAt" },
      ];
    }
    return [];
  };

  useEffect(() => {
    if (activeTab === "dept") {
      setTableData(DepDummyData);
    } else {
      setTableData(dummyData);
    }
  }, [activeTab]);

  return (
    <div className={styles.result_detail_section}>
      <section className={styles.top_section}>
        <StatNumItem label={"훈련참가인원"} num={"29,895"} />
        <StatNumItem label={"위반자 현황"} num={"29,895"} />
        <StatNumItem label={"총 위반 건수"} num={"29,895"} />
        <StatNumItem label={"신고서 제출 건수"} num={"29,895"} />
      </section>
      <section className={styles.bottom_section}>
        <div className={`${styles.section_box}`}>
          {/* tab 부분 */}
          <div className={styles.tab_wrapper}>
            <Tab tabs={label} onClick={handlerTabClick} isActive={activeTab} />
          </div>
          {/* tab 변경되어야함 */}
          {/* 그래프 부분 */}
          <div className={styles.chart_wrapper}>
            {activeTab === "user" ? (
              <ChartContainer styles={styles} />
            ) : (
              <DeptChart styles={styles} />
            )}
          </div>
          {/* 훈련정보 */}
          <div className={styles.training_info_wrapper}>
            <TrainingInfo styles={styles} />
          </div>
          {/* 훈련 테이블 */}
          <div className={styles.detail_table_list_wrapper}>
            <TableToolbar />
            <div className={styles.table_list}>
              <Table
                header={tableHeader(activeTab)}
                tStyle={`${activeTab}_result`}
                data={dummyData}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResultDetailPg;
