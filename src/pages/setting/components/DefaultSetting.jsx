import React from "react";
import styles from "../setting.module.scss";
import CommonInput from "../../../components/common/input/CommonInput";
import LineButton from "../../../components/common/button/LineButton";
function DefaultSetting() {
  return (
    <div className={styles.default_setting_wrapper}>
      <div className={styles.left_wrapper}>
        <div className={styles.title}>
          <p>보내는 메일 서버 설정</p>
        </div>
        <div className={styles.mail_server_input_wrapper}>
          {/* [s] item */}
          <div className={styles.input_group}>
            <div className={styles.label}>서버명</div>
            <div className={styles.input_box}>
              <CommonInput />
            </div>
          </div>
          {/* [e] item */}
          {/* [s] item */}
          <div className={styles.input_group}>
            <div className={styles.label}>서버포트</div>
            <div className={styles.input_box}>
              <CommonInput />
            </div>
          </div>
          {/* [e] item */}
          {/* [s] item */}
          <div className={styles.input_group}>
            <div className={styles.label}>계정</div>
            <div className={styles.input_box}>
              <CommonInput />
            </div>
          </div>
          {/* [e] item */}
          {/* [s] item */}
          <div className={styles.input_group}>
            <div className={styles.label}>암호</div>
            <div className={styles.input_box}>
              <CommonInput type={"password"} />
            </div>
          </div>
          {/* [e] item */}
          {/* [s] item */}
          <div className={styles.input_group}>
            <div className={styles.label}>
              서버 테스트
              <button>
                <img src="/images/alert.svg" alt="" />
              </button>
            </div>
            <div className={styles.test_btn_box}>
              <LineButton
                btn={{
                  label: "보내는 메일 서버 테스트",
                  img: "/images/config_btn.svg",
                }}
              />
              {/* <div className={styles.result_server_text}>
                정상작동
                <img src="/images/result_test.svg" alt="" />
                <span>2025.05.12 13:50 실행 </span>
              </div> */}
              <div className={styles.result_server_text}>
                오류 발생
                <img src="/images/result_test_error.svg" alt="" />
              </div>
            </div>
          </div>
          {/* [e] item */}
        </div>
      </div>
      <div className={styles.right_wrapper}>
        <div className={styles.title}>
          <p>기본 정보 설정</p>
        </div>
      </div>
    </div>
  );
}

export default DefaultSetting;
