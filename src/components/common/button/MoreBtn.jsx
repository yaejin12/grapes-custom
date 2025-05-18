import React, { useState } from "react";
import styles from "./button.module.scss";
function MoreBtn() {
  const [isMoreAction, setIsMoreAction] = useState(false);
  const handlerMoreBtnClick = () => {
    setIsMoreAction((prev) => !prev);
  };
  return (
    <div className={`${styles.more_btn_wrapper}`}>
      <button onClick={handlerMoreBtnClick} className={styles.more_btn}>
        <img src="/images/more.svg" alt="" />
      </button>
      <div
        className={`${styles.more_btn_action_box} ${
          isMoreAction ? styles.more_btn_action : ""
        }`}
      >
        <button className={styles.modify_btn}>
          수정
          <img src="/images/participant_modify.svg" alt="" />
        </button>
        <button className={styles.modify_btn}>
          추가
          <img src="/images/more_plus.svg" alt="" />
        </button>
        <button className={styles.modify_btn}>
          삭제
          <img src="/images/templates_X.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default MoreBtn;
