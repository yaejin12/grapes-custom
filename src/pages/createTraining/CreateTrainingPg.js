import React from "react";
import styles from "./createTraining.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import CommonInput from "../../components/common/input/CommonInput";
import SubTitle from "./components/SubTitle";
import DateRangeInput from "../../components/common/input/DateRangeInput";
import ViolationCriteriaSelector from "../../components/violationCriteriaSelector/ViolationCriteriaSelector";
import SelectSection from "./components/SelectSection";
import CheckBox from "../../components/common/checkBox/CheckBox";
import SubmitButton from "../../components/layout/submitButton/SubmitButton";

function CreateTrainingPg() {
  return (
    <PgTitle h3={"훈련등록"}>
      <section className={styles.section_box}>
        {/* 훈련정보 입력 */}
        <SubTitle
          styles={styles}
          title={"훈련 정보 입력"}
          icon={"/images/CreateT_info.svg"}
        >
          <div className={styles.content}>
            {/* [s] 훈련명 */}
            <div className={styles.content_left}>
              <div className={styles.content_item}>
                <div className={`${styles.label}`}>
                  <span className={styles.required_mark}>훈련명</span>
                </div>
                <div className={styles.input}>
                  <CommonInput placeholder={"훈련명을 입력하세요"} />
                </div>
              </div>
              {/* [e] item */}
            </div>
            {/* 훈련기간 */}
            <div className={styles.content_right}>
              {/* [s] item */}
              <div className={styles.content_item}>
                <div className={`${styles.label}`}>
                  <span className={styles.required_mark}>훈련기간</span>
                </div>
                <div className={styles.date_input_wrapper}>
                  <DateRangeInput />
                </div>
              </div>
              {/* [e] item */}
            </div>
          </div>
          {/* 대상자 그룹 */}
          {/* 4개이상 선택하면 넓이 100% 변경 */}
          <div className={`${styles.content} ${styles.group_content}`}>
            <div className={`${styles.select_wrapper}`}>
              <SelectSection
                styles={styles}
                label={"대상자 그룹"}
                // caption={"*최대 10개까지 선택 가능"}
                // data={templateData}
              />
            </div>
          </div>
        </SubTitle>
        {/* 템플릿 선택 */}
        <SubTitle
          styles={styles}
          title={"템플릿 선택"}
          icon={"/images/CreateT_template.svg"}
        >
          <div className={`${styles.content}`}>
            <div className={styles.label_group}>
              <div className={`${styles.label}`}>
                <span className={styles.required_mark}>위반기준</span>
              </div>
              {/* 인풋 */}
              <ViolationCriteriaSelector />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.content_left}>
              <SelectSection
                styles={styles}
                label={"메일 템플릿"}
                optionText={"랜덤 발송"}
                // caption={"*최대 5개까지 선택 가능"}
              />
            </div>
            <div className={styles.content_right}>
              <SelectSection
                styles={styles}
                label={"경고 템플릿"}
                optionText={"사고신고세 제출"}
                // caption={"*미선택시 기본 경고 페이지 발송"}
              />
            </div>
          </div>
        </SubTitle>
        <SubTitle
          styles={styles}
          title={"후속 조취 교육"}
          icon={"/images/CreateT_book.svg"}
        >
          <div className={styles.content}>
            {/* [s] 훈련명 */}
            <div className={styles.content_left}>
              <div className={styles.content_item}>
                <div className={`${styles.label}`}>
                  <span className={styles.required_mark}>교육 실행</span>
                </div>
                <div className={styles.check_box_wrapper}>
                  <div className={styles.check_box_item}>
                    <CheckBox label={"미실행"} />
                    <span>미실행</span>
                  </div>
                  <div className={styles.check_box_item}>
                    <CheckBox label={"실행"} />
                    <span>실행</span>
                  </div>
                </div>
              </div>
              {/* [e] item */}
            </div>
            {/* 훈련기간 */}
            <div className={styles.content_right}>
              {/* [s] item */}
              <div className={styles.content_item}>
                <div className={`${styles.label}`}>
                  <span className={styles.required_mark}>훈련기간</span>
                </div>
                <div className={styles.date_input_wrapper}>
                  <DateRangeInput />
                </div>
              </div>
              {/* [e] item */}
            </div>
          </div>
        </SubTitle>
        <div className={styles.submit_btn_wrapper}>
          <SubmitButton />
        </div>
      </section>
    </PgTitle>
  );
}

export default CreateTrainingPg;
