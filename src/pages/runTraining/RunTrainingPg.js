import React from "react";
import styles from "./runTraining.module.scss";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import RunTrainingItem from "./components/RunTrainingItem";
import { Outlet, useLocation } from "react-router-dom";
import { runList } from "./data";
import { RUN_TRAINING } from "../../config/path.config";

function RunTrainingPg() {
  const location = useLocation();
  const pathname = location.pathname;
  const isRunPg = pathname === RUN_TRAINING;
  const isRunDetailPg = pathname.startsWith(RUN_TRAINING);

  return (
    <PgTitle h3={"훈련 실행"}>
      <section
        className={`${styles.section_box} ${
          isRunDetailPg && styles.detail_pg_section_box
        }`}
      >
        <div className={styles.content}>
          {isRunPg && (
            <ul className={styles.templates_list_wrapper}>
              {runList?.map((data) => (
                <RunTrainingItem styles={styles} data={data} />
              ))}
            </ul>
          )}
          <Outlet />
        </div>
      </section>
    </PgTitle>
  );
}

export default RunTrainingPg;
