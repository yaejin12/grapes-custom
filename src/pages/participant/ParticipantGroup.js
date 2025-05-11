import React from "react";
import styles from "./ParticipantGroup.module.scss";
import TableToolbar from "../../components/layout/table/components/TableToolbar";
import Table from "../../components/layout/table/Table";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ParticipantGroup() {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const { id } = useParams();
  const participantPg = pathname.startsWith("/participant-group/");
  const pGroupPg = pathname === "/participant-group";

  const tableHeader = () => {
    if (pGroupPg) {
      return [
        { text: "No", key: "index" },
        { text: "그룹명", key: "name" },
        { text: "인원", key: "count" },
        { text: "생성일", key: "createdAt" },
        { text: "", key: "actions" },
      ];
    }
    if (participantPg) {
      return [
        { text: "No", key: "index" },
        { text: "이름", key: "name" },
        { text: "부서", key: "department" },
        { text: "직위", key: "position" },
        { text: "이메일", key: "email" },
        { text: "연락처", key: "phone" },
      ];
    }
    return [];
  };

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

  const pgBtn = () => {
    if (pGroupPg) {
      return [
        {
          label: "대상자 신규등록",
          handler: "",
        },
        {
          label: "부서별 랜덤등록",
          handler: "",
        },
        {
          label: "엑셀파일 업로드",
          handler: "",
        },
      ];
    }
    return [
      {
        label: "수정하기",
        handler: "",
      },
    ];
  };

  //
  const handlerTableItemClick = (id) => {
    if (pGroupPg) navigate(`/participant-group/${id}`);
  };

  return (
    <PgTitle h3={pGroupPg ? "대상자 그룹" : "대상자"} btn={pgBtn()}>
      <section className={styles.section_box}>
        <TableToolbar />
        <div className={styles.table_wrapper}>
          <Table
            header={tableHeader()}
            data={data}
            onClick={handlerTableItemClick}
          />
        </div>
      </section>
    </PgTitle>
  );
}

export default ParticipantGroup;
