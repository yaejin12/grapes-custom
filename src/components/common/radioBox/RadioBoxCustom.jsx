import React from "react";
import styles from "./radioBox.module.scss";

function RadioBoxCustom({
  data = ["zip", "xlsx", "pdf", "doc", "ppt"],
  onClick,
  isClicked = "zip",
}) {
  return (
    <div className={styles.file_extension_wrapper}>
      {data?.map((item) => (
        <button
          className={isClicked === item ? styles.action : ""}
          onClick={(e) => onClick?.(e, data)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default RadioBoxCustom;
