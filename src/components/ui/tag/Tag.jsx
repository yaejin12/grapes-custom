import React from "react";
import styles from "./tag.module.scss";

function Tag({ text, styleType, icon }) {
  return (
    <span className={`${styles.tag} ${styles?.[styleType]}`}>
      {icon && <img src="/images/user_num.svg" />}
      {text}
    </span>
  );
}

export default Tag;
