import React from "react";
import styles from "./mailTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import { useLocation } from "react-router-dom";
import Button from "../../components/common/button/Button";
import TemplateList from "../../layout/templateList/TemplateList";
import FilterBox from "../../components/filterBox/FilterBox";
import { templateList } from "./data";

function MailTemplatesPg() {
  const location = useLocation();
  const pathname = location.pathname;
  const mTemplatesPg = pathname === "/mail-templates";
  const pgBtn = () => {
    return [
      {
        label: "신규등록",
        handler: "",
      },
      {
        label: "파일 업로드",
        handler: "",
      },
    ];
  };

  const filterData = [
    { key: "all", label: "전체보기" },
    { key: "click", label: "링크클릭" },
    { key: "ransomware", label: "랜섬웨어" },
    { key: "phishing", label: "피싱" },
  ];
  return (
    <>
      <PgTitle h3={"메일 템플릿"} btn={pgBtn()}>
        <section className={styles.section_box}>
          <FilterBox data={filterData} />
          <TemplateList data={templateList} />
        </section>
      </PgTitle>
    </>
  );
}

export default MailTemplatesPg;
