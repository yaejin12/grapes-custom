import React from "react";
import styles from "./selectedItems.module.scss";
import SelectItemButton from "../common/button/SelectItemButton";

function SelectedItem({ styleType, actionBtn, hashTag, isChecked, icon }) {
  const iconStyle = {
    group: {
      label: "대상자",
      src: "/images/Building.svg",
    },
    tpl: {
      label: "메일 템플릿",
      src: "/images/select_mail_icon.svg",
    },
    alert: {
      label: "경고 템플릿",
      src: "/images/info_alert.svg",
    },
    file: {
      label: "첨부파일",
      src: "/images/select_file.svg",
    },
  };
  return (
    <>
      {/* [s] item */}
      <li
        className={`${styles.common_item} ${styles?.[styleType] || ""} ${
          isChecked ? styles.action : ""
        }`}
      >
        <div className={styles.label_wrapper}>
          <div className={styles.icon}>
            <img src={iconStyle?.[icon]?.src} alt={iconStyle?.[icon]?.label} />
          </div>
          {/* 명 */}
          <div className={styles.label_group}>
            <div className={styles.label}>광주시청</div>
            {hashTag && (
              <div className={styles.tag}>
                <img src="/images/user_num.svg" />
                30
              </div>
            )}
          </div>
        </div>
        <SelectItemButton btnType={actionBtn} isChecked={isChecked} />
      </li>
      {/* [e] item */}
    </>
  );
}

export default SelectedItem;
