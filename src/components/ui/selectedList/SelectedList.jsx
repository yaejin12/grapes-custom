import React from "react";
import SelectedItem from "./SelectedItem";
import styles from "./selectedList.module.scss";

function SelectedList({ data, actionBtn, icon, option, subBtn }) {
  return (
    <div className={`${styles.selected_item_box}`}>
      {option && (
        <div className={styles.option}>
          랜덤 발송
          <i>
            <img src="/images/random.svg" alt="랜덤발송" />
          </i>
        </div>
      )}
      <ul className={`${styles.selected_list}`}>
        <SelectedItem actionBtn={actionBtn} icon={icon} subBtn={subBtn} />
        {/* [e] item */}
      </ul>
    </div>
  );
}

export default SelectedList;
