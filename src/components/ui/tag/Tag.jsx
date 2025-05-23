import React from "react";
import styles from "./tag.module.scss";

function Tag({ text, styleType }) {
  return <span className={`${styles.tag} ${styles?.[styleType]}`}>{text}</span>;
}

export default Tag;
