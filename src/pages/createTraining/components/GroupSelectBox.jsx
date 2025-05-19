import React from "react";
import Button from "../../../components/common/button/Button";
import GroupSelectItem from "./GroupSelectItem";

function GroupSelectBox({
  styles,
  label,
  caption,
  data = [],
  optionText,
  onClickBtn,
}) {
  return (
    <>
      {/* 상단 선택 버튼 section */}
      <div className={styles.template_section_header}>
        <div className={styles.label_group}>
          <div className={styles.label}>
            <span className={styles.required_mark}>{label}</span>
          </div>
          {/* 템플릿 선택 */}
          <Button
            type={"select"}
            btn={{
              label: `${label} 선택하기`,
              img: "/images/btn_select.svg",
            }}
            onClick={onClickBtn}
          />
        </div>
        {/* *최대 00개까지 선택 가능 */}
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
      {/* 하단 선택 된 셀렉 박스 section */}
      {data.length > 0 && (
        <div className={`${styles.select_box_wrapper}`}>
          {data.length > 0 ? (
            <>
              <ul className={`${styles.select_box}`}>
                {data?.map((data) => (
                  <GroupSelectItem styles={styles} data={data} />
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className={styles.empty}>선택 된 템플릿이 없습니다</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default GroupSelectBox;
