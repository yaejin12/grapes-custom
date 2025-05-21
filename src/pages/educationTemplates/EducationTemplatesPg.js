import React from "react";
import styles from "./educationTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";

import FilterBox from "../../components/filterBox/FilterBox";
import { educationData } from "./data";
import FileUploadModal from "./components/FileUploadModal";
import useShowModal from "../../hooks/useShowModal";
import TemplateList from "../../components/layout/templateList/TemplateList";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { EDUCATION_TEMPLATES } from "../../config/path.config";
import { useDispatch } from "react-redux";
import { showModalActions } from "../../store/Modal-slice";
import DetailEduTpl from "./components/DetailEduVideoModal";
import DetailEduVideoModal from "./components/DetailEduVideoModal";

function EducationTemplatesPg({}) {
  const { showModal } = useShowModal();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isEduTplPg = pathname === EDUCATION_TEMPLATES;
  const dispatch = useDispatch();
  // 상단 파일 업로드 클릭 시
  const handlerFileUploadMailTemplateBtnClick = () => {
    showModal(true);
  };

  // 템플릿 item 클릭 시
  const handlerDetailClick = (id) => {
    // navigate(`${EDUCATION_TEMPLATES}/${id}`);
    dispatch(showModalActions.ShowVideoModalAction(true));
  };

  const filterData = [
    { key: "all", label: "전체보기" },
    { key: "pdf", label: "교안" },
    { key: "video", label: "동영상" },
  ];
  return (
    <>
      <PgTitle
        h3={"교육 템플릿"}
        btn={[
          {
            label: "파일 업로드",
            img: "/images/file_upload.svg",
            style: "gr_color",
            handler: handlerFileUploadMailTemplateBtnClick,
          },
        ]}
      >
        {isEduTplPg && (
          <section className={styles.section_box}>
            <FilterBox data={filterData} />
            <TemplateList
              data={educationData}
              handlerDetailClick={handlerDetailClick}
            />
          </section>
        )}
        <Outlet />
      </PgTitle>
      <FileUploadModal styles={styles} />
      <DetailEduVideoModal />
    </>
  );
}

export default EducationTemplatesPg;
