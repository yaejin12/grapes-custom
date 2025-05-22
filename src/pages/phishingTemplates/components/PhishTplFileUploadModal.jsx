import React from "react";
import styles from "../phishingTemplates.module.scss";
import { useLocation } from "react-router-dom";
import { PHISHING_TEMPLATES } from "../../../config/path.config";
import { useSelector } from "react-redux";
import ModalLayout from "./../../../components/modal/ModalLayout";
import CommonInput from "./../../../components/common/input/CommonInput";
import FileInput from "./../../../components/common/input/FileInput";

function PhishTplFileUploadModal() {
  const { pathname } = useLocation();
  const isPhishingTplPg = pathname === PHISHING_TEMPLATES;
  const isShowModal = useSelector((state) => state.showModal.showModal);
  return (
    <>
      {isPhishingTplPg && isShowModal && (
        <ModalLayout title={"피싱 템플릿 파일 업로드"}>
          <div className={styles.form_field_wrapper}>
            {/* [s] 메일이름 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>경고 템플릿명</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput placeholder={"경고 템플릿명을 입력해주세요"} />
              </div>
            </div>
            {/* [e] 메일이름 */}
            {/* [s] 업로드 파일 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>업로드 파일</span>
              </div>
              <div className={styles.form_field}>
                <FileInput />
              </div>
            </div>
            {/* [e] 업로드 파일 */}
          </div>
        </ModalLayout>
      )}
    </>
  );
}

export default PhishTplFileUploadModal;
