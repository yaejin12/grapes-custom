import React from "react";
import styles from "./tplComponents.module.scss";

function CreateTplSubTitle({ styleType }) {
  const subTitleType = {
    info: {
      label: "템플릿 정보 설정",
      img: "/images/template_info.svg",
    },
    editor: {
      label: "템플릿 편집",
      img: "/images/template_editor.svg",
    },
  };
  return (
    <>
      <div className={styles.title_wrapper}>
        <div className={styles.title_icon}>
          <img
            src={subTitleType?.[styleType]?.img || ""}
            alt={subTitleType?.[styleType]?.label || ""}
          />
        </div>
        <p className={styles.title_text}>
          {subTitleType?.[styleType]?.label || ""}
        </p>
      </div>
    </>
  );
}

export default CreateTplSubTitle;
