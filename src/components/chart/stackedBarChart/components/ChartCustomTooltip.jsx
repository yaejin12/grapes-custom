import React from "react";
import styles from "../../chart.module.scss";

function ChartCustomTooltip({ active, payload, label }) {
  return (
    <div className={styles.tooltip_box}>
      <div className={styles.bar_tooltip_label}>{label}</div>
      <ul className={styles.stacked_bar_value}>
        {payload.map((item, index) => (
          <li className={styles.stacked_bar_value_item}>
            <span className={styles.name}>{item.name}</span>:
            <span className={styles.num}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChartCustomTooltip;
