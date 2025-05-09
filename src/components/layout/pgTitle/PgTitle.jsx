import React from "react";
import styles from "../layout.module.scss";

function PgTitle({ h3 }) {
  return (
    <div className={styles.pg_title_wrapper}>
      <h3>{h3}</h3>
    </div>
  );
}

export default PgTitle;
