import React from "react";
import styles from "./runTraining.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import TemplateList from "../../layout/templateList/TemplateList";
import RunTrainingItem from "./components/RunTrainingItem";

function RunTrainingPg() {
  return (
    <PgTitle h3={"훈련 실행"}>
      <section className={styles.section_box}>
        <div className={styles.content}>
          <ul className={styles.templates_list_wrapper}>
            <RunTrainingItem styles={styles} />
            <RunTrainingItem styles={styles} />
            <RunTrainingItem styles={styles} />
            <RunTrainingItem styles={styles} />
            <RunTrainingItem styles={styles} />
          </ul>
        </div>
      </section>
    </PgTitle>
  );
}

export default RunTrainingPg;
