import React from "react";
import styles from "./templateList.module.scss";
import TemplateItem from "./components/TemplateItem";

function TemplateList() {
  return (
    <ul className={styles.templates_list_wrapper}>
      <TemplateItem styles={styles} />
    </ul>
  );
}

export default TemplateList;
