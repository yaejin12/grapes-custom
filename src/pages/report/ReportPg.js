import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./report.module.scss";
import TableToolbar from "../../components/layout/table/components/TableToolbar";
import Table from "../../components/layout/table/Table";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import { reportPgTHeader } from "../../config/uiConfig";
import { reportPgDummyData } from "../../config/dummyData";

function ReportPg() {
  const location = useLocation();
  const pathname = location.pathname;
  const isReportPg = pathname === "/report";
  return (
    <PgTitle h3={"훈련결과"}>
      {isReportPg && (
        <section className={`${styles.section_box}`}>
          <div className={styles.content}>
            <>
              <div className={styles.tool_bar_wrapper}>
                <TableToolbar btn={null} />
              </div>
              <div className={styles.table_wrapper}>
                <Table
                  header={reportPgTHeader}
                  tStyle={"report"}
                  data={reportPgDummyData}
                  btn={[
                    {
                      label: "다운로드",
                      style: "report_download",
                    },
                  ]}
                  //   onClick={handlerTableItemClick}
                />
              </div>
            </>
          </div>
        </section>
      )}
      <Outlet />
    </PgTitle>
  );
}

export default ReportPg;
