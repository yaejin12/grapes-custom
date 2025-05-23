import React from "react";
import styles from "../mailTemplates.module.scss";
import ModalLayout from "./../../../../components/modal/ModalLayout";
import CommonInput from "../../../../components/common/input/CommonInput";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MAIL_TEMPLATES } from "../../../../config/path.config";
import CheckBox from "../../../../components/common/checkBox/CheckBox";
import RadioBoxCustom from "../../../../components/common/radioBox/RadioBoxCustom";

function AddAttachmentModal() {
  const isShowModal = useSelector((state) => state.showModal.showModal);
  const { pathname } = useLocation();
  const isCreateTpl = pathname === `${MAIL_TEMPLATES}/create`;
  return (
    <>
      {isShowModal && isCreateTpl && (
        <ModalLayout title={"첨부파일 등록"}>
          <div className={styles.form_field_wrapper}>
            {/* [s] 메일이름 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>파일명</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput placeholder={"파일명을 입력하세요"} />

                <div className={styles.checkbox_wrapper}>
                  <CheckBox>
                    <p>대용량 파일 여부</p>
                  </CheckBox>
                </div>
              </div>
            </div>
            {/* [e] 메일이름 */}
            {/* [s] 메일이름 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>확장자</span>
              </div>
              <div className={styles.radiobox_wrapper}>
                <RadioBoxCustom />
              </div>
            </div>
            {/* [e] 메일이름 */}
          </div>
        </ModalLayout>
      )}
    </>
  );
}

export default AddAttachmentModal;
