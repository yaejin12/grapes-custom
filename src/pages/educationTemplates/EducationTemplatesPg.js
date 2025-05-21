import React from "react";
import styles from "./educationTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";

import FilterBox from "../../components/filterBox/FilterBox";
import { educationData } from "./data";
import FileUploadModal from "./components/FileUploadModal";
import useShowModal from "../../hooks/useShowModal";
import TemplateList from "../../components/layout/templateList/TemplateList";

function EducationTemplatesPg({}) {
  const { showModal } = useShowModal();

  // 상단 파일 업로드 클릭 시
  const handlerFileUploadMailTemplateBtnClick = () => {
    showModal(true);
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
        <section className={styles.section_box}>
          <FilterBox data={filterData} />
          <TemplateList data={educationData} />
        </section>
      </PgTitle>
      {<FileUploadModal styles={styles} />}
    </>
  );
}

export default EducationTemplatesPg;
