import React from "react";
import styles from "./tag.module.scss";

function Tag({ text, styleType }) {
  return (
    <span className={`${styles.tag} ${styles?.[styleType]}`}>
      {styleType === "user_num" && <img src="/images/user_num.svg" />}
      {text}
    </span>
  );
}

export default Tag;
