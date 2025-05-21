import React from "react";
import styles from "./ParticipantGroup.module.scss";
import TableToolbar from "../../components/layout/table/components/TableToolbar";
import Table from "../../components/layout/table/Table";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import NoData from "../../components/emptyData/NoData";
import { pGTHeader } from "../../config/uiConfig";
import { PARTICIPANT_GROUP } from "../../config/path.config";
import FileUploadModal from "./components/participantGroupFileUpload/FileUploadModal";
import useShowModal from "../../hooks/useShowModal";

function ParticipantGroup() {
  const location = useLocation();
  const pathname = location.pathname;
  const { id } = useParams();
  const navigate = useNavigate();
  const { showModal } = useShowModal();
  const pGroupPg = pathname === PARTICIPANT_GROUP; //대상자 그룹 페이지
  const pGroupAddPg = pathname === `${PARTICIPANT_GROUP}/add`; //대상자 그룹 페이지
  const pGroupRandomPg = pathname === `${PARTICIPANT_GROUP}/random`; //대상자 그룹 페이지
  const pGroupPgDetail = location.pathname === `${PARTICIPANT_GROUP}/${id}`; //대상자 디테일 페이지

  const data = [
    {
      id: 10,
      name: "도시계획팀",
      count: 11,
      createdAt: "2024.10.01",
    },
  ];

  // 신규 등록 클릭 시
  const handlerAddBtnClick = () => {
    navigate("add");
  };

  // 부서별 랜덤등록 클릭 시
  const handlerRandomBtnClick = () => {
    navigate("random");
  };

  // 파일 업로드 클릭 시
  const handlerFileUploadBtnClick = () => {
    showModal(true);
  };

  // 버튼
  const pgBtn = () => {
    if (pGroupPg) {
      return [
        {
          label: "대상자 신규등록",
          img: "/images/participant_group_add.svg",
          style: "point_color",
          handler: handlerAddBtnClick,
        },
        {
          label: "부서별 랜덤등록",
          img: "/images/participant_group_random_add.svg",
          style: "dark_point_color",
          handler: handlerRandomBtnClick,
        },
        {
          label: "엑셀파일 업로드",
          img: "/images/file_upload.svg",
          style: "gr_color",
          handler: handlerFileUploadBtnClick,
        },
      ];
    } else if (pGroupPgDetail) {
      return [
        {
          label: "수정하기",
          img: "/images/participant_modify.svg",
          style: "point_color",
          handler: "",
        },
      ];
    }

    return [];
  };

  // 테이블 클릭 시 디테일 페이지 이동
  const handlerTableItemClick = (id) => {
    if (pGroupPg) navigate(`${PARTICIPANT_GROUP}/${id}`);
  };

  return (
    <>
      <PgTitle h3={pGroupPgDetail ? "대상자" : "대상자 그룹"} btn={pgBtn()}>
        <section
          className={`${styles.section_box} ${
            pGroupAddPg || pGroupRandomPg ? styles.add_section_box : ""
          }`}
        >
          {pGroupPg &&
            (data?.length > 0 ? (
              <>
                <TableToolbar />
                <div className={styles.table_wrapper}>
                  <Table
                    header={pGTHeader}
                    data={data}
                    onClick={handlerTableItemClick}
                    tStyle={"pGroupPg"}
                  />
                </div>
              </>
            ) : (
              <div className={styles.no_user_section}>
                <NoData text={"등록된 대상자 그룹이 없습니다"} />
              </div>
            ))}
          <Outlet />
        </section>
      </PgTitle>
      <FileUploadModal />
    </>
  );
}

export default ParticipantGroup;
