import React from "react";

function OrgToggleItem({ onToggle, styles, node, depth, handlerDeptAddClick }) {
  const handlerClick = (e) => {
    e.stopPropagation(); // 클릭 버블 방지
    onToggle();
  };
  return (
    <div
      style={{ marginLeft: depth * 15, cursor: "pointer" }}
      className={`${styles.org_toggle_item} ${
        // 최상위 일 때
        depth === 0 ? styles.topItem : styles.chid_item
      }`}
      onClick={(e) => handlerClick(e)}
    >
      <span className={`${styles.toggleIcon_icon}`}>
        <img src="/images/tree_top_item.svg" alt="" />
      </span>
      <span className={styles.org_toggle_item_text}>{node.text}</span>
      {handlerDeptAddClick && (
        <button onClick={(e) => handlerDeptAddClick(e, node)}>
          <img src="/images/tree_plus.svg" alt="부서 추가" />
        </button>
      )}
    </div>
  );
}

export default OrgToggleItem;
