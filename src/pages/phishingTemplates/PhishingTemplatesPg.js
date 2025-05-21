import React from "react";
import styles from "./phishingTemplates.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import TemplateList from "../../layout/templateList/TemplateList";
import { phishingData } from "./data";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PHISHING_TEMPLATES } from "../../config/path.config";
import useShowModal from "../../hooks/useShowModal";
import PhishTplFileUploadModal from "./components/PhishTplFileUploadModal";

function PhishingTemplatesPg({}) {
  const pathname = useLocation().pathname;
  const isPhishingTempPg = pathname === PHISHING_TEMPLATES;
  const navigate = useNavigate();
  const { showModal } = useShowModal();

  // 상단 신규등록 버튼 클릭 시
  const handlerTemplateAddBtnClick = () => {
    navigate(`${PHISHING_TEMPLATES}/create`);
  };
  const handlerTemplateFileUploadBtnClick = () => {
    showModal(true);
  };

  // 피팅 템플릿 버튼 전달
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
    <>
      <PgTitle h3={"피싱 템플릿"} btn={isPhishingTempPg && pgBtn()}>
        {isPhishingTempPg && (
          <section className={styles.section_box}>
            <TemplateList data={phishingData} />
          </section>
        )}
        <Outlet />
      </PgTitle>
      <PhishTplFileUploadModal />
    </>
  );
}

export default PhishingTemplatesPg;
