import React from "react";
import styles from "../layout.module.scss";
import Button from "../../common/button/Button";

function PgTitle({ h3, children }) {
  return (
    <>
      <div className={styles.pg_title_wrapper}>
        <h3>{h3}</h3>
        <div className={styles.pg_btn_wrapper}>
          <Button label={"대상자 신규등록"} type={"add"} />
          <Button label={"부서별 랜덤등록"} type={"add"} />
          <Button label={"엑셀파일 업로드"} type={"add"} />
        </div>
      </div>
      {children}
    </>
  );
}

export default PgTitle;
