import React from "react";
import styles from "../educationTemplates.module.scss";
import VideoPlayer from "../../../components/videoPlayer/VideoPlayer";
import EduViewModal from "../../../components/modal/EduViewModal";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { EDUCATION_TEMPLATES } from "../../../config/path.config";
import PdfViewer from "./../../../components/pdfViewer/PdfViewer";

function DetailEduVideoModal({}) {
  const { pathname } = useLocation();
  const showEduDetailModal = useSelector(
    (state) => state.showModal.showEduDetailModal
  );
  const isEducationPg = pathname === EDUCATION_TEMPLATES;
  return (
    <>
      {isEducationPg && showEduDetailModal && (
        <EduViewModal>
          <div className={styles.detail_edu_section}>
            <PdfViewer url={"/pdf/GS.pdf"} />
            {/* <VideoPlayer url={"/video/a.mp4"} /> */}
          </div>
          <div className={styles.info_wrapper}>
            <p className={styles.info_text}>
              물 흐르듯 자연스럽게 흘러가는 말들 속에서 우리는 때로 멈춰 서서,
              지금 이 순간을 바라보게 된다. 눈앞에 펼쳐진 장면들이 무언가를
              말해주는 듯하고, 그 안에서 나만의 의미를 찾아가는 일은 생각보다
              소중하다. 말해주는 듯하고, 그 안에서 나만의 의미를 찾아가는 일은
              생각보다 소중하다.
            </p>
          </div>
        </EduViewModal>
      )}
    </>
  );
}

export default DetailEduVideoModal;
