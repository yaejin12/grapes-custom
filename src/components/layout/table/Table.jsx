import React from "react";
import styles from "./table.module.scss";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../common/button/Button";
const initialBtn = [
  {
    label: "수정",
    style: "modify",
  },
  { label: "삭제", style: "delete" },
];
function Table({ data, header, onClick, tStyle, btn = initialBtn }) {
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
    if (tStyle === "report") return styles.report;
    if (tStyle === "setting_user") return styles.setting_user;
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "링크클릭":
        return "/images/table_type_mail.svg";
      case "피싱":
        return "/images/table_type_fishing.svg";
      case "랜섬웨어":
        return "/images/table_type_ransomware.svg";
      default:
        return "/images/table_type_mail.svg";
    }
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
            {header?.map((col, j) => {
              //
              const isDataCell =
                col.key !== "index" &&
                col.key !== "actions" &&
                col.key !== "type";
              return (
                <div className={styles.cell}>
                  {/* 리스트 순번 */}
                  {col?.key === "index" && <span>{i + 1}</span>}
                  {/* 버튼 */}
                  {col?.key === "actions" && (
                    <div className={styles.item_btn_wrapper}>
                      {btn &&
                        btn?.map((btnItem) => (
                          <Button btn={btnItem} type={"table"} />
                        ))}
                    </div>
                  )}
                  {/* 훈련유형일 때 */}
                  {col?.key === "type" && (
                    <>
                      {item?.[col.key]?.map((typeItem, idx) => {
                        const iconSrc = getTypeIcon(typeItem);
                        return (
                          <span key={idx} className={styles.type_tag}>
                            <img src={iconSrc} alt={typeItem} />
                          </span>
                        );
                      })}
                    </>
                  )}
                  {/* 본래 내용 */}
                  {isDataCell && (
                    <span
                      className={`${col?.flex ? styles[col?.flex] : ""} ${
                        col?.key === "educationType"
                          ? styles.education_type
                          : ""
                      }`}
                    >
                      {item?.[col.key] ?? "-"}
                    </span>
                  )}
                </div>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
