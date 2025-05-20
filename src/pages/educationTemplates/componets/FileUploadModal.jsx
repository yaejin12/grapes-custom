import React from "react";
import FileUploadModalLayout from "../../../components/modal/FileUploadModalLayout";
import CommonInput from "./../../../components/common/input/CommonInput";
import FileInput from "../../../components/common/input/FileInput";
import { useSelector } from "react-redux";

function FileUploadModal({ styles }) {
  const showModal = useSelector((state) => state.showModal.showModal);
  return (
    <>
      {showModal && (
        <FileUploadModalLayout>
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
        </FileUploadModalLayout>
      )}
    </>
  );
}

export default FileUploadModal;
