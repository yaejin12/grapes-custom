import React from "react";
import Tag from "../../../components/ui/tag/Tag";

function TemplateSelectItem({ styles, data }) {
  return (
    <li className={styles.selected_item}>
      <div className={styles.item_content}>
        {/* img */}
        <div className={styles.thumb}>
          <img src="" alt="" />
        </div>
        {/* text */}
        <div className={styles.thumb_info}>
          <p className={styles.thumb_title}>
            {data?.title}
            {data.type && (
              //  <span className={styles.tag}>{data?.type}</span>
              <Tag styleType={"select"} text={data?.type} />
            )}
          </p>
          <button className={styles.prev_btn}>미리보기</button>
        </div>
        {/* 오른쪽 버튼 */}
        <button className={styles.right_icon}>
          <img src="/images/select_box_X.svg" alt="삭제" />
        </button>
      </div>
    </li>
  );
}

export default TemplateSelectItem;
