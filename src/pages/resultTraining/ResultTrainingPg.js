import React from "react";
import PgTitle from "./../../components/layout/pgTitle/PgTitle";
import styles from "./resultTrainingPg.module.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TableToolbar from "../../components/layout/table/components/TableToolbar";
import Table from "../../components/layout/table/Table";
import { dummyTrainingData } from "./data";
import { resultPgTHeader } from "../../config/uiConfig";

function ResultTrainingPg() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const isResultPg = pathname === "/result-training";

  const handlerTableItemClick = (id) => {
    navigate(`/result-training/${id}`);
  };

  return (
    <PgTitle h3={"훈련결과"}>
      {isResultPg && (
        <section className={`${styles.section_box}`}>
          <div className={styles.content}>
            <>
              <div className={styles.tool_bar_wrapper}>
                <TableToolbar />
              </div>
              <div className={styles.table_wrapper}>
                <Table
                  header={resultPgTHeader}
                  tStyle={"result"}
                  data={dummyTrainingData}
                  onClick={handlerTableItemClick}
                  btn={[
                    {
                      label: "복사",
                      style: "result_cover",
                    },
                  ]}
                />
              </div>
            </>
          </div>
        </section>
      )}
      <Outlet />
    </PgTitle>
  );
}

export default ResultTrainingPg;
