import React, { useEffect } from "react";
import ModalLayout from "../../../../components/modal/ModalLayout";
import CommonInput from "../../../../components/common/input/CommonInput";
import FileInput from "../../../../components/common/input/FileInput";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { EDUCATION_TEMPLATES } from "../../../../config/path.config";

function FileUploadModal({ styles }) {
  const pathname = useLocation().pathname;
  const isEduPg = pathname === EDUCATION_TEMPLATES;
  const showModal = useSelector((state) => state.showModal.showModal);
  return (
    <>
      {isEduPg && showModal && (
        <ModalLayout title={"파일 업로드"}>
          <div className={styles.form_field_wrapper}>
            {/* [s] 교육명 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>교육명</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput placeholder={"교육명을 입력해주세요"} />
              </div>
            </div>
            {/* [e] 교육명 */}
            {/* [s] 간단설명 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>간단설명</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput
                  placeholder={"30자 내로 간단하게 설명을 입력하세요"}
                />
              </div>
            </div>
            {/* [e] 간단설명 */}
            {/* [s] 간단설명 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>업로드 파일</span>
              </div>
              <div className={styles.form_field}>
                <FileInput />
              </div>
            </div>
            {/* [e] 간단설명 */}
          </div>
        </ModalLayout>
      )}
    </>
  );
}

export default FileUploadModal;
