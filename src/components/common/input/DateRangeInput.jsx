import React from "react";
import styles from "./input.module.scss";
import CommonInput from "./CommonInput";
function DateRangeInput({ startDate, endDate, onStartChange, onEndChange }) {
  return (
    <div className={styles.input_date_wrapper}>
      <span className={styles.input_date}>
        <CommonInput
          type={"date"}
          placeholder={"시작일 선택"}
          value={startDate}
          onChange={onStartChange}
        />
      </span>
      <span>-</span>
      <span className={styles.input_date}>
        <CommonInput
          type={"date"}
          placeholder={"종료일 선택"}
          value={endDate}
          onChange={onEndChange}
        />
      </span>
    </div>
  );
}

export default DateRangeInput;
