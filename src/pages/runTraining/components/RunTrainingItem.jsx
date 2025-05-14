import React, { useState } from "react";
import Button from "../../../components/common/button/Button";

function RunTrainingItem({ styles }) {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      {/* [s] item */}
      <li className={styles.templates_item}>
        <div className={styles.item_title_wrapper}>
          <span className={styles.item_title}>광주시청_2차 훈련</span>
          <button>
            <img src="/images/more_btn.svg" alt="더보기" />
          </button>
        </div>
        {/* 훈련현황 */}
        <div className={styles.status_wrapper}>
          <div className={styles.status_title_wrapper}>
            <p className={styles.status_title}>
              <span>훈련현황</span>
            </p>
            <span className={`${styles.tag} ${styles.end}`}>훈련중</span>
          </div>
          {/* status bor */}
          <div className={styles.bar_box}>
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`${styles.bar_segment} ${
                  i < currentStep ? styles.active : ""
                } ${i === currentStep - 1 ? styles.active_last : ""}`}
              />
            ))}
          </div>
          {/* status bar info */}
          <div className={styles.status_info}>
            <p className={styles.percent}>50%</p>
            <p className={`${styles.status_end} ${styles.action}`}>완료</p>
          </div>
        </div>

        <ul className={styles.item_info_wrapper}>
          <li>
            <span className={styles.info_label}>
              <img src="/images/run_user.svg" alt="" />
              참가자
            </span>
            <span className={styles.info_text}>인포인 외 3건</span>
          </li>
          <li>
            <span className={styles.info_label}>
              <img src="/images/run_mail.svg" alt="" />
              메일 템플릿
            </span>
            <span className={styles.info_text}>
              등록한 메일 템플릿 명 외 3건
            </span>
          </li>
          <li>
            <span className={styles.info_label}>
              <img src="/images/run_days.svg" alt="" />
              훈련기간
            </span>
            <span className={styles.info_text}>2021.02.01 ~ 2021.02.12</span>
          </li>
          <li>
            <span className={styles.info_label}>
              <img src="/images/run_days.svg" alt="" />
              교육기간
            </span>
            <span className={styles.info_text}>2021.02.01 ~ 2021.02.12</span>
          </li>
        </ul>
        <div className={styles.item_btn_wrapper}>
          <Button label={"즉시발송"} type={"run"} />
          <Button label={"수정"} type={"template"} />
          {/* <Button label={"일시정지"} type={"run"} disabled={true} />
          <Button label={"다시발송"} type={"run"} disabled={true} /> */}
        </div>
      </li>
      {/* [e] item */}
    </>
  );
}

export default RunTrainingItem;
