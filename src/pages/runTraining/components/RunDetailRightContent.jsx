import React, { useEffect, useState } from "react";
import TableToolbar from "../../../components/layout/table/components/TableToolbar";
import Tab from "../../../components/common/tab/Tab";
import Table from "../../../components/layout/table/Table";
import { useLocation } from "react-router-dom";
import { dummyData, dummyEData, runTableBtn } from "../data";

function RunDetailRightContent({ styles }) {
  const pathname = useLocation().pathname;
  const [activeTab, setActive] = useState("user");
  const [data, setData] = useState(dummyData);
  const handlerTabClick = (tab) => {
    setActive(tab);
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

    if (activeTab === "education") {
      return [
        { text: "이름", key: "name" },
        { text: "부서", key: "department" },
        { text: "직책", key: "position" },
        { text: "수신메일", key: "emailReceivedAt" },
        { text: "이수결과", key: "result" },
        { text: "발송현황", key: "status" },
      ];
    }
    return [];
  };

  const handlerTableItemClick = () => {};

  const label = [
    { id: "user", label: "훈련" },
    { id: "education", label: "교육" },
  ];

  //   ------------------------------
  useEffect(() => {
    if (activeTab === "education") {
      setData(dummyEData);
    } else {
      setData(dummyData);
    }
  }, [activeTab]);
  return (
    <div className={styles.right_inner}>
      <TableToolbar btn={runTableBtn} />
      <div className={styles.tab_wrapper}>
        <Tab tabs={label} onClick={handlerTabClick} isActive={activeTab} />
      </div>
      <div className={styles.table_wrapper}>
        <Table
          header={tableHeader(activeTab)}
          data={data}
          tStyle={`${activeTab}_result`}
          onClick={handlerTableItemClick}
        />
      </div>
    </div>
  );
}

export default RunDetailRightContent;
