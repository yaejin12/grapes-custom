import React from "react";
import styles from "./violationCriteriaSelector.module.scss";

function ViolationCriteriaSelector({
  data = [
    { label: "메일열람", key: "open" },
    { label: "URL클릭", key: "url" },
    { label: "랜섬웨어", key: "ransomware" },
    { label: "피싱입력", key: "phishing" },
  ],
  selected = ["open"],
  disabled = ["phishing"],
  onClick,
}) {
  return (
    <div className={styles.selector_wrapper}>
      {data?.map((item) => {
        const isActive = selected?.includes(item.key);
        const isDisabled = disabled?.includes(item.key);
        return (
          <button
            key={item.key}
            className={`${isActive ? styles.action : ""} ${
              isDisabled ? styles.disabled : ""
            }`}
            onClick={() => onClick?.(item?.key)}
            disabled={isDisabled}
          >
            {item?.label}
          </button>
        );
      })}
    </div>
  );
}

export default ViolationCriteriaSelector;
