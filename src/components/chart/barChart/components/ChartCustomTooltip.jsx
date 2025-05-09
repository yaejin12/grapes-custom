import React from "react";
import styles from "../../chart.module.scss";

function ChartCustomTooltip({ active, payload, label, type }) {
  if (!active || !payload || !payload.length) return null;
  const isBarChart = type === "bar";

  return (
    <div className={styles.tooltip_box}>
      <div className={styles.bar_tooltip_label}>
        {isBarChart ? label : payload[0]?.name}
      </div>
      <div className={styles.value}>
        <span>{payload[0]?.value}</span>
        {isBarChart ? "건" : "%"}
      </div>
    </div>
  );
}

export default ChartCustomTooltip;
