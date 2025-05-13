import React from "react";
import styles from "./templateList.module.scss";
import TemplateItem from "./components/TemplateItem";

function TemplateList({ data }) {
  return (
    <ul className={styles.templates_list_wrapper}>
      {data?.map((itemData) => (
        <TemplateItem styles={styles} data={itemData} />
      ))}
    </ul>
  );
}

export default TemplateList;
