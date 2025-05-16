import React from "react";
import styles from "../table.module.scss";
import SelectBox from "../../../common/selectBox/SelectBox";
import Button from "../../../common/button/Button";
import SearchInput from "../../../common/input/SearchInput";

const tableBtn = [
  {
    label: "엑셀다운",
    img: "/images/table_download.svg",
  },
  {
    label: "출력하기",
    img: "/images/table_printer.svg",
    style: "printer",
  },
];

export default function TableToolbar({ btn = tableBtn }) {
  return (
    <div className={styles.toolbar_wrapper}>
      <div className={styles.search_wrapper}>
        <SearchInput />
      </div>
      <div className={styles.toolbar_right_wrapper}>
        {btn && (
          <div className={styles.btn_wrapper}>
            {btn?.map((btnItem) => (
              <Button btn={btnItem} />
            ))}
          </div>
        )}
        <div className={styles.select_box}>
          <SelectBox placeholder={"10개씩 보기"} />
        </div>
      </div>
    </div>
  );
}
