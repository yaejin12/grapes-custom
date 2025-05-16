import React, { useEffect, useState } from "react";
import TableToolbar from "../../../components/layout/table/components/TableToolbar";
import Tab from "../../../components/common/tab/Tab";
import Table from "../../../components/layout/table/Table";
import { useLocation } from "react-router-dom";
import { dummyData, dummyEData, runTableBtn } from "../data";
import useTab from "../../../hooks/useTab";
import {
  runDetailTabLabel,
  runPgEducationTHeader,
  userResultTHeader,
} from "../../../config/uiConfig";

function RunDetailRightContent({ styles }) {
  // -------------------------------------------------
  const pathname = useLocation().pathname;
  const { tab: activeTab, handleTabClick } = useTab("user"); //tab
  const [data, setData] = useState(dummyData);
  // -------------------------------------------------
  // tab에 따른 table header
  const tableHeader = (activeTab) => {
    if (activeTab === "user") {
      return userResultTHeader;
    }

    if (activeTab === "education") {
      return runPgEducationTHeader;
    }
    return [];
  };

  //   ------------------------------
  useEffect(() => {
    if (activeTab === "education") {
      setData(dummyEData);
    } else {
      setData(dummyData);
    }
  }, [activeTab]);
  // -------------------------------------------------
  return (
    <div className={styles.right_inner}>
      <TableToolbar btn={runTableBtn} />
      <div className={styles.tab_wrapper}>
        <Tab
          tabs={runDetailTabLabel}
          onClick={handleTabClick}
          isActive={activeTab}
        />
      </div>
      <div className={styles.table_wrapper}>
        <Table
          header={tableHeader(activeTab)}
          data={data}
          tStyle={`${activeTab}_result`}
        />
      </div>
    </div>
  );
}

export default RunDetailRightContent;
