import React from "react";
import styles from "../table.module.scss";

import SelectBox from "../../../common/selectBox/SelectBox";
import Button from "../../../common/button/Button";
import SearchInput from "../../../common/input/SearchInput";

export default function TableToolbar({}) {
  return (
    <div className={styles.toolbar_wrapper}>
      <div className={styles.search_wrapper}>
        <SearchInput />
      </div>
      <div className={styles.toolbar_right_wrapper}>
        <div className={styles.btn_wrapper}>
          <Button
            btn={{
              label: "엑셀다운",
              img: "/images/table_download.svg",
            }}
          />
          <Button
            btn={{
              label: "출력하기",
              img: "/images/table_printer.svg",
              style: "printer",
            }}
          />
        </div>
        <div className={styles.select_box}>
          <SelectBox placeholder={"10개씩 보기"} />
        </div>
      </div>
    </div>
  );
}
