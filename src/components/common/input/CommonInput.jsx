import React from "react";
import styles from "./input.module.scss";

function CommonInput({ value, placeholder, error, type = "text", onChange }) {
  return (
    <>
      <input
        className={`${styles.common_input} ${
          type === "date" ? styles.date : ""
        }`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e)}
      />
      {error && <p className={styles.error}>메일 템플릿 이름을 입력해주세요</p>}
    </>
  );
}

export default CommonInput;
