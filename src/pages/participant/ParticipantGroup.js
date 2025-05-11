import React from "react";
import styles from "./ParticipantGroup.module.scss";
import TableToolbar from "../../components/layout/table/components/TableToolbar";
import Table from "../../components/layout/table/Table";

function ParticipantGroup() {
  const tableHeader = ["No", "그룹명", "인원", "생성일", ""];
  const data = [
    {
      id: 1,
      name: "광주시청 전직원",
      count: 12,
      createdAt: "2024.10.12",
    },
    {
      id: 2,
      name: "정보보안팀",
      count: 5,
      createdAt: "2024.10.10",
    },
    {
      id: 3,
      name: "기획조정실",
      count: 7,
      createdAt: "2024.10.08",
    },
    {
      id: 4,
      name: "회계과",
      count: 4,
      createdAt: "2024.10.07",
    },
    {
      id: 5,
      name: "총무과",
      count: 6,
      createdAt: "2024.10.06",
    },
    {
      id: 6,
      name: "전산정보팀",
      count: 9,
      createdAt: "2024.10.05",
    },
    {
      id: 7,
      name: "복지지원팀",
      count: 8,
      createdAt: "2024.10.04",
    },
    {
      id: 8,
      name: "청렴감사실",
      count: 3,
      createdAt: "2024.10.03",
    },
    {
      id: 9,
      name: "민원실",
      count: 10,
      createdAt: "2024.10.02",
    },
    {
      id: 10,
      name: "도시계획팀",
      count: 11,
      createdAt: "2024.10.01",
    },
  ];

  return (
    <section className={styles.section_box}>
      <TableToolbar />
      <div className={styles.table_wrapper}>
        <Table header={tableHeader} data={data} />
      </div>
    </section>
  );
}

export default ParticipantGroup;
