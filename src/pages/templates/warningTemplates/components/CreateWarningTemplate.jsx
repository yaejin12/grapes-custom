import React from "react";
import styles from "../warningTemplates.module.scss";
import CommonInput from "../../../../components/common/input/CommonInput";
import GrapesEditor from "../../../../components/editor/GrapesEditor";
import SubmitButton from "../../../../components/layout/submitButton/SubmitButton";
import CreateTplSubTitle from "../../components/CreateTplSubTitle";
function CreateWarningTemplate() {
  return (
    <section className={styles.create_section_box}>
      <div className={styles.template_info_setting_wrapper}>
        <CreateTplSubTitle styleType={"info"} />
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
          {/* [e] 입력 부분 */}
        </div>
      </div>
      {/* 템플릿 라이브러리  */}
      <div className={styles.template_editor_wrapper}>
        <CreateTplSubTitle styleType={"editor"} />
        <div className={styles.grapes_wrapper}>
          <GrapesEditor />
        </div>
      </div>
      {/* 등록 버튼 */}
      <div className={styles.submit_wrapper}>
        <SubmitButton submitLabel={"등록"} />
      </div>
    </section>
  );
}

export default CreateWarningTemplate;
