import React from "react";
import styles from "../ParticipantGroup.module.scss";
import TableToolbar from "../../../components/layout/table/components/TableToolbar";
import Table from "../../../components/layout/table/Table";
import NoData from "../../../components/emptyData/NoData";
import { pGDetailTHeader } from "../../../config/uiConfig";

function ParticipantGroupDetail({ data }) {
  return (
    <>
      {data?.length > 0 ? (
        <>
          <TableToolbar />
          <div className={styles.table_wrapper}>
            <Table
              header={pGDetailTHeader}
              data={data}
              tStyle={"pGroupDetailPg"}
            />
          </div>
        </>
      ) : (
        <div className={styles.no_user_section}>
          <NoData text={"등록된 대상자가 없습니다"} />
        </div>
      )}
    </>
  );
}

export default ParticipantGroupDetail;
