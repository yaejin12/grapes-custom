import React from "react";
import styles from "../../chart.module.scss";

function BarChartCustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className={styles.tooltip_box}>
      <div className={styles.bar_tooltip_label}>{label}</div>
      <div className={styles.value}>
        {payload[0].value} <span>건</span>
      </div>
    </div>
  );
}

export default BarChartCustomTooltip;
