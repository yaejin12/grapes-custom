import React from "react";
import styles from "./templateList.module.scss";
import TemplateItem from "./components/TemplateItem";

function TemplateList({ data, handlerDetailClick }) {
  return (
    <ul className={styles.templates_list_wrapper}>
      {data?.map((itemData) => (
        <TemplateItem
          styles={styles}
          data={itemData}
          handlerDetailClick={handlerDetailClick}
        />
      ))}
    </ul>
  );
}

export default TemplateList;
