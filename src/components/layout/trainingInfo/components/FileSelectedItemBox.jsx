import React from "react";
import styles from "../trainingInfo.module.scss";
function FileSelectedItemBox({ data }) {
  return (
    <div className={`${styles.file_selected_item_box}`}>
      <ul
        className={`${styles.selected_list} ${
          data?.length > 3 ? styles.over : ""
        }`}
      >
        {/* [s] item */}
        <li className={styles.selected_item}>
          <div className={styles.item_content}>
            <div className={styles.item_icon}>
              <img src={"/images/select_file.svg"} alt="랜섬워어" />
            </div>
            <div className={styles.item_text}>광주시청</div>
          </div>
          <button className={styles.delete_icon}>
            <img src="/images/select_box_X.svg" alt="" />
          </button>
        </li>
        {/* [e] item */}
      </ul>
    </div>
  );
}

export default FileSelectedItemBox;
