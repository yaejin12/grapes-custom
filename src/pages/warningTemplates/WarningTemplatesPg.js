import React from "react";
import styles from "./warningTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import TemplateList from "../../layout/templateList/TemplateList";
import { phishingData } from "../phishingTemplates/data";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { WARNING_TEMPLATES } from "../../config/path.config";

function WarningTemplatesPg() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const isWarningTempPg = pathname === WARNING_TEMPLATES;

  // 상단 신규등록 버튼 클릭 시
  const handlerTemplateAddBtnClick = () => {
    navigate(`${WARNING_TEMPLATES}/create`);
  };
  const handlerTemplateFileUploadBtnClick = () => {};
  const pgBtn = () => {
    return [
      {
        label: "신규등록",
        img: "/images/templates_add.svg",
        style: "point_color",
        handler: handlerTemplateAddBtnClick,
      },
      {
        label: "파일 업로드",
        img: "/images/file_upload.svg",
        style: "gr_color",
        handler: handlerTemplateFileUploadBtnClick,
      },
    ];
  };

  return (
    <PgTitle h3={"경고 템플릿"} btn={isWarningTempPg && pgBtn()}>
      {isWarningTempPg && (
        <section className={styles.section_box}>
          <TemplateList data={phishingData} />
        </section>
      )}
      <Outlet />
    </PgTitle>
  );
}

export default WarningTemplatesPg;
