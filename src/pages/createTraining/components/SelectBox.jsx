import React from "react";
import Button from "../../../components/common/button/Button";
import SelectedItem from "../../../components/ui/selectedList/SelectedItem";
import SelectedList from "../../../components/ui/selectedList/SelectedList";

function SelectBox({ styles, label, caption, data = [], onClickBtn }) {
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
            handlerClick={onClickBtn}
            data-id={label}
          />
        </div>
        {/* *최대 00개까지 선택 가능 */}
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
      {/* 하단 선택 된 셀렉 박스 section */}
      {data.length > 0 && label === "대상자 그룹" && (
        <SelectedList icon={"group"} actionBtn={"delete"} />
      )}

      {data.length > 0 && label?.includes("템플릿") && (
        <SelectedList
          icon={"tpl"}
          actionBtn={"delete"}
          option={label?.includes("메일") ? true : false}
          subBtn={"view"}
        />
      )}

      {data.length > 0 && label?.includes("교육") && (
        <SelectedList icon={"edu"} actionBtn={"delete"} subBtn={"view"} />
      )}
    </>
  );
}

export default SelectBox;
