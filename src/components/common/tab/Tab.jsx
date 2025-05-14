import React from "react";
import styles from "./tab.module.scss";

function Tab({ id, tabs, isActive, onClick }) {
  return (
    <ul className={styles.tab_wrapper} role="tablist">
      {tabs &&
        tabs?.map((tab) => (
          <li
            key={tab.id}
            role="presentation"
            className={`${styles.tab_item} ${
              isActive === tab?.id ? styles.action : ""
            }`}
          >
            <button
              role="tab"
              id={id}
              aria-selected={isActive}
              aria-controls={tab?.id}
              onClick={() => onClick?.(tab?.id)}
              className={styles.tab_btn}
            >
              {tab?.label}
            </button>
          </li>
        ))}
    </ul>
  );
}

export default Tab;
