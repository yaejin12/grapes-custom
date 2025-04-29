import React from "react";
import styles from "../../chart.module.scss";

function PieChartCustomTooltip({ active, payload, coordinate }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className={styles.tooltip_box}>
      <div className={styles.value}>
        {payload[0].value}
        <span>%</span>
      </div>
    </div>
  );
}

export default PieChartCustomTooltip;
