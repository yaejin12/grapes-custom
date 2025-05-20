import React from "react";
import styles from "./educationTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import TemplateList from "../../layout/templateList/TemplateList";
import FilterBox from "../../components/filterBox/FilterBox";
import { educationData } from "./data";
import FileUploadModalLayout from "./../../components/modal/FileUploadModalLayout";
import FileUploadModal from "./componets/FileUploadModal";
import { useDispatch } from "react-redux";
import { showModalActions } from "../../store/Modal-slice";

function EducationTemplatesPg({}) {
  const dispatch = useDispatch();
  // 상단 파일 업로드
  const handlerFileUploadMailTemplateBtnClick = () => {
    dispatch(showModalActions.ShowModalAction(true));
  };
  const pgBtn = () => {
    return [
      {
        label: "파일 업로드",
        img: "/images/file_upload.svg",
        style: "gr_color",
        handler: handlerFileUploadMailTemplateBtnClick,
      },
    ];
  };

  const filterData = [
    { key: "all", label: "전체보기" },
    { key: "pdf", label: "교안" },
    { key: "video", label: "동영상" },
  ];
  return (
    <>
      <PgTitle h3={"교육 템플릿"} btn={pgBtn()}>
        <section className={styles.section_box}>
          <FilterBox data={filterData} />
          <TemplateList data={educationData} />
        </section>
      </PgTitle>
{      <FileUploadModal styles={styles} />}
    </>
  );
}

export default EducationTemplatesPg;
