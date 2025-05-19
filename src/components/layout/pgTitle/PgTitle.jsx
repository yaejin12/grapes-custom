import React from "react";
import styles from "../layout.module.scss";
import Button from "../../common/button/Button";
import { type } from "@testing-library/user-event/dist/type";
import { useLocation } from "react-router-dom";

function PgTitle({ h3, children, btn }) {
  return (
    <>
      <div className={styles.pg_title_wrapper}>
        <h3>{h3}</h3>
        <div className={styles.pg_btn_wrapper}>
          {btn &&
            btn?.map((btnItem) => (
              <Button
                btn={btnItem}
                type={"add"}
                handlerClick={btnItem?.handler || (() => {})}
              />
            ))}
        </div>
      </div>
      {children}
    </>
  );
}

export default PgTitle;
