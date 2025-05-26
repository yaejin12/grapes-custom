import React, { useState } from "react";
import styles from "./createTraining.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import CommonInput from "../../components/common/input/CommonInput";
import SubTitle from "./components/SubTitle";
import DateRangeInput from "../../components/common/input/DateRangeInput";
import ViolationCriteriaSelector from "../../components/violationCriteriaSelector/ViolationCriteriaSelector";
import SubmitButton from "../../components/layout/submitButton/SubmitButton";
import { templateData } from "./data";
import SelectBox from "./components/SelectBox";
import TplSelectModal from "../../components/modal/selectModal/TplSelectModal";
import useShowModal from "../../hooks/useShowModal";
import { useLocation } from "react-router-dom";
import { CREATE_TRAINING } from "../../config/path.config";
import GroupSelectModal from "../../components/modal/selectModal/GroupSelectModal";
import RadioBox from "../../components/common/radioBox/RadioBox";

function CreateTrainingPg() {
  // 상태관리
  const { showModal, showGroupListModal, showTplListModal } = useShowModal();
  const { pathname } = useLocation();
  const isCreateTPg = pathname === CREATE_TRAINING;
  const [modalType, setModalType] = useState("");

  // 선택하기 버튼 클릭 시 모달이 보여짐
  const handlerSelectBtnClick = (e) => {
    const btnClickLabel = e.currentTarget.dataset.id;
    setModalType(btnClickLabel);
    if (btnClickLabel === "대상자 그룹") return showGroupListModal(true);

    showTplListModal(true);
  };
  // ---------------
  return (
    <>
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
                <SelectBox
                  styles={styles}
                  label={"대상자 그룹"}
                  caption={"*최대 10개까지 선택 가능"}
                  onClickBtn={handlerSelectBtnClick}
                  data={templateData}
                />
              </div>
              {/* [s] 훈련기간 */}
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
              {/* [e] 훈련기간 */}
            </div>
          </SubTitle>
          {/* 템플릿 선택 */}
          <SubTitle
            styles={styles}
            title={"템플릿 선택"}
            icon={"/images/CreateT_template.svg"}
          >
            <div className={styles.content}>
              <div className={styles.content_left}>
                <div className={styles.content_item}>
                  <div className={`${styles.label}`}>
                    <span className={styles.required_mark}>사고신고서</span>
                  </div>
                  {/* 인풋 */}
                  <div className={styles.radio_wrapper}>
                    <RadioBox label={"미포함"} name={"accidentReport"} />
                    <RadioBox label={"포함"} name={"accidentReport"} />
                  </div>
                </div>
                <SelectBox
                  styles={styles}
                  label={"메일 템플릿"}
                  optionText={"랜덤 발송"}
                  caption={"*최대 5개까지 선택 가능"}
                  data={templateData}
                  onClickBtn={handlerSelectBtnClick}
                />
              </div>
              <div className={styles.content_right}>
                <div className={styles.content_item}>
                  <div className={`${styles.label}`}>
                    <span className={styles.required_mark}>위반기준</span>
                  </div>
                  {/* 인풋 */}
                  <ViolationCriteriaSelector />
                </div>
                <SelectBox
                  styles={styles}
                  label={"경고 템플릿"}
                  caption={"*미선택시 기본 경고 페이지 발송"}
                  onClickBtn={handlerSelectBtnClick}
                  data={templateData}
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
              <div className={styles.content_left}>
                <div className={styles.content_item}>
                  <div className={`${styles.label}`}>
                    <span className={styles.required_mark}>실행 선택</span>
                  </div>
                  {/* 인풋 */}
                  <div className={styles.radio_wrapper}>
                    <RadioBox label={"실행"} name={"education"} />
                    <RadioBox label={"미실행"} name={"education"} />
                  </div>
                </div>
                <SelectBox
                  styles={styles}
                  label={"교육"}
                  caption={"*훈련 위반자 대상 교육 전송"}
                  data={templateData}
                  onClickBtn={handlerSelectBtnClick}
                  
                />
              </div>
              <div className={styles.content_right}>
                <div className={styles.content_item}>
                  <div className={`${styles.label}`}>
                    <span className={styles.required_mark}>교육기간</span>
                  </div>
                  <div className={styles.date_input_wrapper}>
                    <DateRangeInput />
                  </div>
                </div>
              </div>
            </div>
          </SubTitle>
          {/* 제일 하단 버튼 */}
          <div className={styles.submit_btn_wrapper}>
            <SubmitButton />
          </div>
        </section>
      </PgTitle>
      <TplSelectModal isCurrentPath={isCreateTPg} modalType={modalType} />
      <GroupSelectModal isCurrentPath={isCreateTPg} />
    </>
  );
}

export default CreateTrainingPg;

/**
 *
 *
 */
