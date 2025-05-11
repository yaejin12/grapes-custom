import React from "react";
import styles from "./mailTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import { useLocation } from "react-router-dom";
import Button from "../../components/common/button/Button";
import TemplateList from "../../layout/templateList/TemplateList";

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
  return (
    <>
      <PgTitle h3={"메일 템플릿"} btn={pgBtn()}>
        <section className={styles.section_box}>
          <ul className={styles.filter_wrapper}>
            <li className={styles.action}>전체보기</li>
            <li>링크클릭</li>
            <li>랜섬웨어</li>
            <li>피싱</li>
          </ul>
          <TemplateList />
        </section>
      </PgTitle>
    </>
  );
}

export default MailTemplatesPg;
