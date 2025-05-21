import React from "react";
import styles from "./defaultWarningTpl.module.scss";
import CommonInput from "./../common/input/CommonInput";
import SubmitButton from "./../layout/submitButton/SubmitButton";
function DefaultWarningTpl() {
  return (
    <section className={styles.default_warning_tpl_section}>
      <div className={styles.default_warning_tpl_heder}>
        <h5>이메일 모의 훈련 안내</h5>
      </div>
      {/* [s] 사고 신고서 미포함 */}
      <div className={styles.warning_tpl_wrapper}>
        <div className={styles.warning_tpl_change_box}>
          {/* -------------------------------------------------------- */}
          {/* [s] 기본 템플릿 일 경우 -------------------------------------------------------- */}
          <div className={styles.mail_icon_box}>
            <div className={styles.mail_icon}>
              <img src="/images/email_warning_icon.png" alt="" />
            </div>
          </div>
          <p className={styles.default_warning_text}>
            본 메일은 실제 공격이 아닌 모의 훈련용으로 발송된 것입니다. <br />
            사용자 PC에는 아무런 영향을 주지 않지만 실제 상황일 경우
            <br />
            <span>악성코드에 감염될 가능성이 높으므로 각별한 주의가 필요</span>
            합니다.
          </p>
          {/* [e] 기본 템플릿 경우 -------------------------------------------------------- */}
          {/* [s] 템플릿 커스텀일 경우 이미지 src 변경 ----------------------------------   */}
          {/* <img
            className={styles.warning_tpl_img}
            src="/images/aaaaa.jpg"
            alt=""
          /> */}
          {/* [e] 템플릿 커스텀일 경우 이미지 src 변경 ----------------------------------   */}
        </div>
      </div>
      {/* [e] 사고 신고서 미포함 */}
      {/* [s] 사고 신고서 포함 */}
      <div className={styles.incident_report_wrapper}>
        <div className={styles.incident_title}>사고신고서 작성</div>
        <div className={styles.form_field_wrapper}>
          {/* [s] 이름 */}
          <div className={styles.content_item}>
            <div className={`${styles.label}`}>
              <span className={styles.required_mark}>이름</span>
            </div>
            <div className={styles.form_field}>
              <CommonInput placeholder={"이름을 입력해주세요"} />
            </div>
          </div>
          {/* [e] 이름 */}
          {/* [s] 소속부서 */}
          <div className={styles.content_item}>
            <div className={`${styles.label}`}>
              <span className={styles.required_mark}>소속부서</span>
            </div>
            <div className={styles.form_field}>
              <CommonInput placeholder={"소속부서를 입력해주세요"} />
            </div>
          </div>
          {/* [e] 소속부서 */}
          {/* [s] 메일제목 */}
          <div className={styles.content_item}>
            <div className={`${styles.label}`}>
              <span className={styles.required_mark}>메일제목</span>
            </div>
            <div className={styles.form_field}>
              <CommonInput placeholder={"메일제목을 입력해주세요"} />
            </div>
          </div>
          {/* [e] 메일제목 */}
          {/* [s] 발신자명 */}
          <div className={styles.content_item}>
            <div className={`${styles.label}`}>
              <span className={styles.required_mark}>발신자명</span>
            </div>
            <div className={styles.form_field}>
              <CommonInput placeholder={"발신자명을 입력해주세요"} />
            </div>
          </div>
          {/* [e] 발신자명 */}
          {/* [s] 발신자 이메일 */}
          <div className={styles.content_item}>
            <div className={`${styles.label}`}>
              <span className={styles.required_mark}>발신자 이메일</span>
            </div>
            <div className={styles.form_field}>
              <CommonInput placeholder={"발신자 이메일을 입력해주세요"} />
            </div>
          </div>
          {/* [e] 발신자 이메일 */}
          {/* [s] 열람시간 */}
          <div className={styles.content_item}>
            <div className={`${styles.label}`}>
              <span className={styles.required_mark}>열람시간</span>
            </div>
            <div className={styles.form_field}>
              <CommonInput placeholder={"메일 열람시간을 입력해주세요"} />
            </div>
          </div>
          {/* [e] 열람시간 */}
        </div>
        <div className={styles.submit_btn_wrapper}>
          <SubmitButton />
        </div>
      </div>
      {/* [e] 사고 신고서 포함 */}
    </section>
  );
}

export default DefaultWarningTpl;
