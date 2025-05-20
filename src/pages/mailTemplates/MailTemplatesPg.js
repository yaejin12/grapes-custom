import React from "react";
import styles from "./mailTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import TemplateList from "../../layout/templateList/TemplateList";
import FilterBox from "../../components/filterBox/FilterBox";
import { templateList } from "./data";
import { MAIL_TEMPLATES } from "../../config/path.config";

function MailTemplatesPg() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const mTemplatesPg = pathname === MAIL_TEMPLATES;

  // 상단 신규등록
  const handlerCreateMailTemplateBtnClick = () => {
    navigate(`${MAIL_TEMPLATES}/create`);
  };

  const handlerFileUploadMailTemplateBtnClick = () => {
    navigate(`${MAIL_TEMPLATES}/file_upload`);
  };

  // 상단 버튼
  const pgBtn = () => {
    return [
      {
        label: "신규등록",
        img: "/images/templates_add.svg",
        style: "point_color",
        handler: handlerCreateMailTemplateBtnClick,
      },
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
    { key: "click", label: "링크클릭" },
    { key: "ransomware", label: "랜섬웨어" },
    { key: "phishing", label: "피싱" },
  ];
  return (
    <>
      <PgTitle h3={"메일 템플릿"} btn={mTemplatesPg && pgBtn()}>
        {mTemplatesPg && (
          <section className={styles.section_box}>
            <FilterBox data={filterData} />
            <TemplateList data={templateList} />
          </section>
        )}
        <Outlet />
      </PgTitle>
    </>
  );
}

export default MailTemplatesPg;
