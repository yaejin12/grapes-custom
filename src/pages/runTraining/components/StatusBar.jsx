import React, { useEffect, useState } from "react";
import styles from "../runTraining.module.scss";
import { statusText } from "../data";

function StatusBar({ data, style }) {
  const [currentStep, setCurrentStep] = useState(2);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPercent(60);
    }, 100);

    return () => clearTimeout(timeout); // 클린업
  }, []);
  return (
    <>
      <div className={styles.status_title_wrapper}>
        <p className={styles.status_title}>
          <span>훈련현황</span>
        </p>
        <div className={styles.tag_wrapper}>
          <span className={`${styles.tag} ${styles.ing}`}>{"훈련중"}</span>
          <span className={styles.percent}>50%</span>
        </div>
      </div>
      {/* status bor */}
      <div className={styles.bar_box}>
        <div
          className={styles.step_action}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      {/* status bar info */}
      <div className={styles.status_info}>
        {style === "detail" ? (
          <>
            {statusText.map((text) => (
              <span
                className={`${styles.status_end} ${
                  currentStep ? styles.active : ""
                }`}
              >
                {text}
              </span>
            ))}
          </>
        ) : (
          <p className={styles.percent}>{data?.percent}%</p>
        )}
        <p className={`${styles.status_end} ${styles.action}`}>완료</p>
      </div>
    </>
  );
}

export default StatusBar;
