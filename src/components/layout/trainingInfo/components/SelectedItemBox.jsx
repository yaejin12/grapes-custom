import React from "react";
import styles from "../trainingInfo.module.scss";
import SelectedItem from "../../../selectedItems/SelectedItem";

function SelectedItemBox({ title, data }) {
  return (
    <div className={`${styles.selected_item_box}`}>
      <ul className={`${styles.selected_list}`}>
        <SelectedItem actionBtn={"check"} icon={"group"} />
        <SelectedItem actionBtn={"view"} icon={"group"} />
        <SelectedItem actionBtn={"view"} icon={"tpl"} />

        {/* [e] item */}
      </ul>
    </div>
  );
}

export default SelectedItemBox;
