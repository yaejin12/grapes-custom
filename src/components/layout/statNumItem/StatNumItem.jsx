import React from "react";
import styles from "../layout.module.scss";

function StatNumItem({ label, num }) {
  let status;
  switch (label) {
    case "훈련실시횟수":
      status = {
        icon: "/images/num_t.svg",
        iconStyle: "",
        metric: "건",
      };
      break;
    case "훈련참가인원":
      status = {
        icon: "/images/num_t_user.svg",
        iconStyle: styles.p_count,
        metric: "명",
      };
      break;
    case "위반자 현황":
      status = {
        icon: "/images/num_v_user.svg",
        iconStyle: styles.v_count,
        metric: "명",
      };
      break;
    case "총 위반 건수":
      status = {
        icon: "/images/num_v_total.svg",
        iconStyle: styles.v_total_count,
        metric: "건",
      };
      break;

    default:
      break;
  }

  return (
    <>
      {/* [s] item */}
      <div className={styles.dashboard_num_item}>
        <div className={`${styles.num_item_icon} ${status?.iconStyle}`}>
          <img src={status?.icon} alt={label}></img>
        </div>
        <div className={`${styles.dashboard_stat_box}`}>
          <p className={styles.label}>{label}</p>
          <p className={styles.num}>
            <span>{num}</span>
            {status?.metric}
          </p>
        </div>
      </div>
      {/* [e] item */}
    </>
  );
}

export default StatNumItem;
