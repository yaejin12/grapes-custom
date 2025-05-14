import React from "react";
import styles from "./educationTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import TemplateList from "../../layout/templateList/TemplateList";
import FilterBox from "../../components/filterBox/FilterBox";
import { educationData } from "./data";

function EducationTemplatesPg({}) {
  const pgBtn = () => {
    return [
      {
        label: "신규등록",
        img: "/images/templates_add.svg",
        style: "point_color",
        handler: "",
      },
      {
        label: "파일 업로드",
        img: "/images/file_upload.svg",
        style: "gr_color",
        handler: "",
      },
    ];
  };

  const filterData = [
    { key: "all", label: "전체보기" },
    { key: "pdf", label: "교안" },
    { key: "video", label: "동영상" },
  ];
  return (
    <PgTitle h3={"교육 템플릿"} btn={pgBtn()}>
      <section className={styles.section_box}>
        <FilterBox data={filterData} />
        <TemplateList data={educationData} />
      </section>
    </PgTitle>
  );
}

export default EducationTemplatesPg;
