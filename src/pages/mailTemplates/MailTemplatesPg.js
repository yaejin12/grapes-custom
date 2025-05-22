import React from "react";
import styles from "./mailTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import FilterBox from "../../components/filterBox/FilterBox";
import { templateList } from "./data";
import { MAIL_TEMPLATES } from "../../config/path.config";
import useShowModal from "../../hooks/useShowModal";
import MailTemplatesFileUpload from "./components/fileUpload/MailTemplatesFileUpload";
import TemplateList from "../../components/layout/templateList/TemplateList";
import { mailFilterData } from "../../config/uiConfig";

function MailTemplatesPg() {
  const location = useLocation();
  const navigate = useNavigate();
  const { showModal } = useShowModal();
  const pathname = location.pathname;
  const mTemplatesPg = pathname === MAIL_TEMPLATES;

  // 상단 신규등록
  const handlerCreateMailTemplateBtnClick = () => {
    navigate(`${MAIL_TEMPLATES}/create`);
  };

  const handlerFileUploadMailTemplateBtnClick = () => {
    showModal(true);
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

  return (
    <>
      <PgTitle h3={"메일 템플릿"} btn={mTemplatesPg && pgBtn()}>
        {mTemplatesPg && (
          <section className={styles.section_box}>
            <FilterBox data={mailFilterData} />
            <TemplateList data={templateList} />
          </section>
        )}
        <Outlet />
      </PgTitle>
      <MailTemplatesFileUpload />
    </>
  );
}

export default MailTemplatesPg;
