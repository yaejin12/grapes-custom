import React from "react";
import styles from "../warningTemplates.module.scss";
import CommonInput from "../../../components/common/input/CommonInput";
import GrapesEditor from "../../../components/editor/GrapesEditor";
import SubmitButton from "../../../components/layout/submitButton/SubmitButton";
function CreateWarningTemplate() {
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
            {/* [s] item - 메일이름 */}
            <div className={styles.content_item}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>템플릿이름</span>
              </div>
              <div className={styles.form_field}>
                <CommonInput placeholder={"경고 템플릿 이름을 입력해주세요"} />
              </div>
            </div>
            {/* [e] item - 메일이름 */}
          </div>
          {/* 오른쪽 */}
          <div className={styles.content_right}></div>
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

export default CreateWarningTemplate;
