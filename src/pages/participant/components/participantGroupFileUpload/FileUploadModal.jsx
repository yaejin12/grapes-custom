import React from "react";
import ModalLayout from "../../../../components/modal/ModalLayout";
import styles from "../../ParticipantGroup.module.scss";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { PARTICIPANT_GROUP } from "../../../../config/path.config";
import CommonInput from "../../../../components/common/input/CommonInput";
import FileInput from "../../../../components/common/input/FileInput";
import SampleDownload from "../../../../components/common/button/SampleDownload";

function FileUploadModal() {
  const pathname = useLocation().pathname;
  const isGroupPg = pathname === PARTICIPANT_GROUP;
  const showModal = useSelector((state) => state.showModal.showModal);
  return (
    <>
      {isGroupPg && showModal && (
        <ModalLayout title={"엑셀파일 업로드"}>
          <div className={styles.form_field_wrapper}>
            {/* [s] 참가자 그룹명 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>참가자 그룹명</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput placeholder={"참가자 그룹명을 입력해주세요"} />
              </div>
            </div>
            {/* [e] 참가자 그룹명 */}
            {/* [s] 업로드 파일 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>업로드 파일</span>
              </div>
              <div className={styles.form_field}>
                <FileInput />
                <SampleDownload />
              </div>
            </div>
            {/* [e] 업로드 파일 */}
          </div>
        </ModalLayout>
      )}
    </>
  );
}

export default FileUploadModal;
