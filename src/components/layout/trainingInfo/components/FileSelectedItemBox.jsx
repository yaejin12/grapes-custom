import React from "react";
import styles from "../trainingInfo.module.scss";
import SelectedItem from "../../../selectedItems/SelectedItem";
function FileSelectedItemBox({ data }) {
  return (
    <div className={`${styles.file_selected_item_box}`}>
      <ul
        className={`${styles.selected_list} ${
          data?.length > 3 ? styles.over : ""
        }`}
      >
        <SelectedItem icon={"file"} actionBtn={"delete"} />
        {/* [e] item */}
      </ul>
    </div>
  );
}

export default FileSelectedItemBox;
