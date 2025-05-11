import React from "react";
import styles from "../table.module.scss";
import SearchInput from "../../../input/SearchInput";
import SelectBox from "../../../common/selectBox/SelectBox";
import Button from "../../../common/button/Button";
export default function TableToolbar({}) {
  return (
    <div className={styles.toolbar_wrapper}>
      <div className={styles.search_wrapper}>
        <SearchInput />
      </div>
      <div className={styles.toolbar_right_wrapper}>
        <div className={styles.btn_wrapper}>
          <Button label={"엑셀다운"} />
          <Button label={"출력하기"} />
        </div>
        <div className={styles.select_box}>
          <SelectBox placeholder={"10개씩 보기"} />
        </div>
      </div>
    </div>
  );
}
