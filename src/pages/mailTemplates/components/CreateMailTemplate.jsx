import React from "react";
import styles from "../mailTemplates.module.scss";
import CommonInput from "../../../components/common/input/CommonInput";
import SelectBox from "./../../../components/common/selectBox/SelectBox";
import GrapesEditor from "../../../components/editor/GrapesEditor";
import SubmitButton from "./../../../components/layout/submitButton/SubmitButton";
import LineButton from "./../../../components/common/button/LineButton";
import SelectedItemBox from "../../../components/layout/trainingInfo/components/SelectedItemBox";
import FileSelectedItemBox from "../../../components/layout/trainingInfo/components/FileSelectedItemBox";
import TemplateSelectItem from "../../createTraining/components/TemplateSelectItem";
import { templateData } from "../../createTraining/data";
import SelectedItem from "../../../components/selectedItems/SelectedItem";
function CreateMailTemplate() {
  return (
    <section className={styles.create_section_box}>
      <div className={styles.template_info_setting_wrapper}>
        {/* [s] 타이틀 부분 */}
        <div className={styles.title_wrapper}>
          <div className={styles.title_icon}>
            <img src="/images/template_info.svg" alt="" />
          </div>
          <p className={styles.title_text}>템플릿 정보 설정</p>
        </div>
        {/* [e] 타이틀 부분 */}
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
                <SelectBox styleType={"template"} />
              </div>
            </div>
            {/* [e] item - 훈련유형 */}
            {/* [s] item - 메일이름 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>메일이름</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput placeholder={"메일 템플릿 이름을 입력해주세요"} />
              </div>
            </div>
            {/* [e] item - 메일이름 */}
            {/* [s] item - 메일제목 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>메일제목</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput
                  placeholder={"실제 발송할 메일 제목을 입력해주세요"}
                />
              </div>
            </div>
            {/* [e] item - 메일제목 */}
          </div>
          {/* 오른쪽 */}
          <div className={styles.content_right}>
            {/* [s] item - 발신자명 */}
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
            {/* [e] item - 발신자명 */}
            {/* [s] item - 발신자 이메일 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>발신자 이메일</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput
                  placeholder={"실제 발송할 발송자 이메일을 입력해주세요"}
                />
              </div>
            </div>
            {/* [e] item - 발신자 이메일 */}
            {/* [s] 훈련 유형이 첨부 파일이면 나타남 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>첨부파일</span>
              </div>
              <div className={styles.form_field}>
                <LineButton btn={{ label: "첨부파일 등록" }} />

                <div className={styles.selected_box_wrapper}>
                  <FileSelectedItemBox />
                </div>
              </div>
            </div>
            {/* [e] 훈련 유형이 첨부 파일이면 나타남 */}
            {/* [s] 훈련 유형이 피싱이면 나타남 */}
            {/* <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>피싱 템플릿</span>
              </div>
              <div className={styles.form_field}>
                <LineButton btn={{ label: "피싱 템플릿 선택" }} />

                <div className={styles.selected_box_wrapper}>
                  <ul className={`${styles.select_box}`}>
                    <SelectedItemBox title={"피싱"} />
                  </ul>
                </div>
              </div>
            </div> */}
            {/* [e] 훈련 유형이 첨부 파일이면 나타남 */}
          </div>
          {/* [e] 입력 부분 */}
        </div>
      </div>
      {/* 템플릿 라이브러리  */}
      <div className={styles.template_editor_wrapper}>
        {/* [s] 타이틀 부분 */}
        <div className={styles.title_wrapper}>
          <div className={styles.title_icon}>
            <img src="/images/template_editor.svg" alt="" />
          </div>
          <p className={styles.title_text}>템플릿 정보 설정</p>
        </div>
        {/* [e] 타이틀 부분 */}
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
  );
}

export default CreateMailTemplate;
