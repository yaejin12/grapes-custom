import React from "react";
import styles from "./warningTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import TemplateList from "../../layout/templateList/TemplateList";
import { phishingData } from "../phishingTemplates/data";

function WarningTemplatesPg() {
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

  return (
    <PgTitle h3={"경고 템플릿"} btn={pgBtn()}>
      <section className={styles.section_box}>
        <TemplateList data={phishingData} />
      </section>
    </PgTitle>
  );
}

export default WarningTemplatesPg;
