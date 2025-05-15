import React from "react";
import styles from "./table.module.scss";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../common/button/Button";

function Table({ data, header, onClick, tStyle }) {
  const location = useLocation();
  const pathname = location.pathname;

  const customTableStyle = () => {
    if (pathname === "/participant-group")
      return styles.participant_group_table;

    if (pathname.startsWith("/participant-group/"))
      return styles.participant_table;

    if (tStyle === "user_result") return styles.user_result;
    if (tStyle === "education_result") return styles.education_result;
    if (tStyle === "dept_result") return styles.dept_result;
    if (tStyle === "result") return styles.result;
  };

  return (
    <div className={styles.table_wrapper}>
      <ul className={`${styles.table_header} ${customTableStyle()}`}>
        {header?.map((text) => (
          <li className={styles.cell}>{text?.text}</li>
        ))}
      </ul>
      <ul className={`${styles.table_body} ${customTableStyle()}`}>
        {data?.map((item, i) => (
          <li key={item?.id} onClick={() => onClick?.(item?.id)}>
            {header?.map((col, j) => (
              <div className={styles.cell}>
                {col?.key === "index" && <span>{i + 1}</span>}
                {col?.key === "actions" && (
                  <div className={styles.item_btn_wrapper}>
                    <Button
                      btn={{
                        label: "수정",
                        style: "modify",
                      }}
                      type={"table"}
                    />
                    <Button
                      btn={{ label: "삭제", style: "delete" }}
                      type={"table"}
                    />
                  </div>
                )}
                {col.key !== "index" && col.key !== "actions" && (
                  <span>{item?.[col.key]}</span>
                )}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
