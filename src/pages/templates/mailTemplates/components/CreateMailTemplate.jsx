import React, { useEffect, useState } from "react";
import styles from "../mailTemplates.module.scss";
import SelectBox from "../../../../components/common/selectBox/SelectBox";
import GrapesEditor from "../../../../components/editor/GrapesEditor";
import SubmitButton from "../../../../components/layout/submitButton/SubmitButton";
import LineButton from "../../../../components/common/button/LineButton";
import CreateTplSubTitle from "../../components/CreateTplSubTitle";
import {
  leftInputFields,
  rightInputFields,
  TypeOptionData,
} from "../../../../config/uiConfig";
import CreateTplLabeledInput from "../../components/CreateTplLabeledInput";
import AddAttachmentModal from "./AddAttachmentModal";
import useShowModal from "../../../../hooks/useShowModal";
import { useSelector } from "react-redux";
import TplSelectModal from "./../../../../components/modal/selectModal/TplSelectModal";
import { useLocation } from "react-router-dom";
import { MAIL_TEMPLATES } from "../../../../config/path.config";

function CreateMailTemplate() {
  // 서버에 보낼 데이터
  const [formData, setFormData] = useState({
    type: "1",
    templateName: "",
    subject: "",
    senderName: "",
    senderEmail: "",
  });
  const { showModal, showTplListModal } = useShowModal();
  const { pathname } = useLocation();
  const createMTpl = pathname === `${MAIL_TEMPLATES}/create`;
  // ------------------------------------------------------------------

  // 훈련유형 변경 핸들러 시
  const handlerTypeSelectChange = (e) => {
    const { value } = e.target;
    console.log(value);

    setFormData((prev) => ({ ...prev, type: value }));
  };

  // input 변경 핸들러
  const handlerInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 첨부파일 추가 버튼 클릭 시 모달 창 보여짐
  const handlerAttachmentAddBtnClick = () => {
    showModal(true);
  };
  // 피싱 템플릿 선택하기 클릭 시 모달 창 보여짐
  const handlerPhishingSelectBtnClick = () => {
    showTplListModal(true);
  };

  return (
    <>
      <section className={styles.create_section_box}>
        <div className={styles.template_info_setting_wrapper}>
          <CreateTplSubTitle styleType={"info"} />
          {/* [s] 입력 부분 */}
          <div className={styles.content_wrapper}>
            {/* 왼쪽 */}
            <div className={styles.content_left}>
              {/* [s] item - 훈련유형 */}
              <div className={styles.content_item}>
                <div className={`${styles.label}`}>
                  <span className={styles.required_mark}>훈련유형</span>
                </div>
                <div className={styles.form_field}>
                  <SelectBox
                    styleType={"template"}
                    optionData={TypeOptionData}
                    selectValue={formData?.type}
                    onChange={handlerTypeSelectChange}
                  />
                </div>
              </div>
              {/* [e] item - 훈련유형 */}
              {/* 메일 이름 / 메일 제목 */}
              {leftInputFields.map((fieldItem, i) => (
                <CreateTplLabeledInput
                  key={i}
                  field={fieldItem}
                  onChange={handlerInputChange}
                  value={formData?.[fieldItem?.key]}
                />
              ))}
              {/* ---> */}
            </div>
            {/* 오른쪽 */}
            <div className={styles.content_right}>
              {/* <--- 발신자명, 발신자 이메일 input */}
              {rightInputFields.map((fieldItem, i) => (
                <CreateTplLabeledInput
                  key={i}
                  field={fieldItem}
                  onChange={handlerInputChange}
                  value={formData?.[fieldItem?.key]}
                />
              ))}
              {/*  */}
              {/* [s] 훈련 유형이 첨부 파일이면 나타남 */}
              {formData?.type === "2" && (
                <div className={styles.content_item}>
                  <div className={`${styles.label}`}>
                    <span className={styles.required_mark}>첨부파일</span>
                  </div>
                  <div className={styles.form_field}>
                    <LineButton
                      btn={{
                        label: "첨부파일 등록",
                      }}
                      onClick={handlerAttachmentAddBtnClick}
                    />
                    <div className={styles.selected_box_wrapper}>
                      {/* <SelectedItemBox title={"피싱"} /> */}
                    </div>
                  </div>
                </div>
              )}
              {/* [e] 훈련 유형이 첨부 파일이면 나타남 */}
              {/* [s] 훈련 유형이 피싱이면 나타남 */}
              {formData?.type === "3" && (
                <div className={styles.content_item}>
                  <div className={`${styles.label}`}>
                    <span className={styles.required_mark}>피싱 템플릿</span>
                  </div>
                  <div className={styles.form_field}>
                    <LineButton
                      btn={{ label: "피싱 템플릿 선택" }}
                      onClick={handlerPhishingSelectBtnClick}
                    />
                    <div className={styles.selected_box_wrapper}>
                      <ul className={`${styles.select_box}`}>
                        {/* <SelectedItemBox title={"피싱"} /> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* [e] 훈련 유형이 첨부 파일이면 나타남 */}
            </div>
            {/* [e] 입력 부분 */}
          </div>
        </div>
        {/* 템플릿 라이브러리  */}
        <div className={styles.template_editor_wrapper}>
          <CreateTplSubTitle styleType={"editor"} />
          {/* [s] grapes */}
          <div className={styles.grapes_wrapper}>
            <GrapesEditor />
          </div>
          {/* [e] grapes */}
        </div>
        {/* 등록 버튼 */}
        <div className={styles.submit_wrapper}>
          <SubmitButton submitLabel={"등록"} />
        </div>
      </section>
      <AddAttachmentModal />
      <TplSelectModal modalType={"피싱 템플릿"} isCurrentPath={createMTpl} />
    </>
  );
}

export default CreateMailTemplate;
