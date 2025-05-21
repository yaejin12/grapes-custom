import React, { useState } from "react";
import styles from "../../mailTemplates.module.scss";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MAIL_TEMPLATES } from "../../../../config/path.config";
import FileUploadModalLayout from "../../../../components/modal/FileUploadModalLayout";
import CommonInput from "../../../../components/common/input/CommonInput";
import FileInput from "../../../../components/common/input/FileInput";
import SelectBox from "./../../../../components/common/selectBox/SelectBox";
import CheckBox from "./../../../../components/common/checkBox/CheckBox";
import Button from "../../../../components/common/button/Button";
import SelectBoxButton from "../../../../components/common/button/SelectBoxButton";

function MailTemplatesFileUpload() {
  const isShowModal = useSelector((state) => state.showModal.showModal);
  const { pathname } = useLocation();
  const isMailTemPg = pathname === MAIL_TEMPLATES;
  //피싱 클릭 했는지
  const [selectedPhishTpl, setSelectedPhishTpl] = useState();
  const handlerPhishingTemplateItemClick = (id) => {
    setSelectedPhishTpl(id);
  };

  return (
    <>
      {isMailTemPg && isShowModal && (
        <FileUploadModalLayout title={"메일 템플릿 파일 업로드"}>
          <div className={styles.form_field_wrapper}>
            {/* [s] 훈련유형 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>훈련유형</span>
              </div>
              <div className={styles.form_field}>
                <SelectBox styleType={"template"} />
              </div>
            </div>
            {/* [e] 훈련유형 */}
            {/* [s] 메일이름 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>메일이름</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput placeholder={"메일 템플릿 이름을 입력해주세요"} />
              </div>
            </div>
            {/* [e] 메일이름 */}
            {/* [s] 메일 제목 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>메일 제목</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput
                  placeholder={"실제 발송할 메일 제목을 입력해주세요"}
                />
              </div>
            </div>
            {/* [e] 메일 제목 */}
            {/* [s] 발신자명 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>발신자명</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput
                  placeholder={"실제 발송할 발신자명을 입력해주세요"}
                />
              </div>
            </div>
            {/* [e] 발신자명 */}
            {/* [s] 발신자 이메일 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>발신자 이메일</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput
                  placeholder={"실제 발송할 발신자 이메일을 입력해주세요"}
                />
              </div>
            </div>
            {/* [e] 발신자 이메일 */}
            {/* [s] 랜섬웨어일때 보여지는 첨부파일 영역 */}
            {/* <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>첨부파일</span>
              </div>
              <div className={styles.form_field}>
                <div className={styles.att_file_box}>
                  <div className={styles.att_file_form_field}>
                    <div className={`${styles.label} ${styles.sm_label}`}>
                      <span>파일명</span>
                    </div>
                    <CommonInput
                      placeholder={"실제 발송할 발신자 이메일을 입력해주세요"}
                    />
                  </div>
                  <div className={styles.att_file_form_field}>
                    <div className={styles.large_file_check_wrapper}>
                      <CheckBox />
                      <span className={styles.check_box_label}>
                        대용량 파일 여부
                      </span>
                    </div>
                  </div>
                  <div className={styles.att_file_form_field}>
                    <div className={`${styles.label} ${styles.sm_label}`}>
                      <span>확장자</span>
                    </div>
                    <ul className={styles.file_extension_wrapper}>
                      <li className={styles.action}>zip</li>
                      <li>xlsx</li>
                      <li>pdf</li>
                      <li>doc</li>
                      <li>ppt</li>
                    </ul>
                  </div>
                  <div className={styles.att_file_add_btn_wrapper}>
                    <div className={styles.btn}>
                      <Button
                        type={"sm_btn"}
                        btn={{ label: "취소", style: "gr_color" }}
                      />
                      <Button type={"sm_btn"} btn={{ label: "추가" }} />
                    </div>
                  </div>
                </div>
                <div className={styles.create_file_wrapper}>
                  <ul className={styles.create_file_list}>
                    <li className={styles.create_file_item}>
                      <p>2025-05-20 서울시청 개발팀 훈련 01.xls</p>
                      <SelectBoxButton />
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* [e] 랜섬웨어일때 보여지는 첨부파일 영역 */}
            {/* [s] 피싱일때 보여지는 피싱 선택 영역 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>피싱 선택</span>
              </div>
              <div className={styles.form_field}>
                <div className={styles.phishing_box}>
                  <ul className={styles.phishing_list}>
                    <li
                      className={`${styles.phishing_item} ${styles.action}`}
                      onClick={handlerPhishingTemplateItemClick}
                    >
                      <div className={styles.thumbnail_box}>
                        <img src="" alt="" />
                      </div>
                      <p className={styles.phishing_title}>피싱피피싱피싱싱</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.create_file_wrapper}>
                  <ul className={styles.create_file_list}>
                    <li className={styles.create_file_item}>
                      <p>2025-05-20 서울시청 개발팀 훈련 01.xls</p>
                      <SelectBoxButton />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* [e] 피싱일때 보여지는 피싱 선택 영역 */}
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
        </FileUploadModalLayout>
      )}
    </>
  );
}

export default MailTemplatesFileUpload;
