import React from "react";
import styles from "./table.module.scss";
import { useLocation } from "react-router-dom";
import Button from "../../common/button/Button";

function Table({ data, header }) {
  const location = useLocation();
  const pathname = location.pathname;

  let custom;
  switch (pathname) {
    case "/participant-group":
      custom = styles.participant_group_table;
      break;

    default:
      custom = "";
      break;
  }
  return (
    <div className={styles.table_wrapper}>
      <ul className={`${styles.table_header} ${custom}`}>
        {header?.map((text) => (
          <li className={styles.cell}>{text}</li>
        ))}
      </ul>
      <ul className={`${styles.table_body} ${custom}`}>
        {data?.map((item, i) => (
          <li>
            <div className={styles.cell}>
              <span>{i + 1}</span>
            </div>
            <div className={styles.cell}>
              <span>{item?.name}</span>
            </div>
            <div className={styles.cell}>
              <span>{item?.count}</span>
            </div>
            <div className={styles.cell}>
              <span>{item?.createdAt}</span>
            </div>
            <div className={styles.cell}>
              <div className={styles.item_btn_wrapper}>
                <Button label={"수정"} type={"table"} />
                <Button label={"삭제"} type={"table"} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
