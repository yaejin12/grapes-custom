import React from "react";
import Button from "../../../components/common/button/Button";
import TemplateSelectItem from "./TemplateSelectItem";
import { templateData } from "../data";
import GroupSelectItem from "./GroupSelectItem";
import CheckBox from "../../../components/common/checkBox/CheckBox";

function SelectSection({
  styles,
  label,
  caption,
  data = [],
  optionText,
  onClickBtn,
}) {
  const isRequired = label?.includes("메일");
  const isGroup = label?.includes("대상자");
  return (
    <>
      {/* 상단 선택 버튼 section */}
      <div className={styles.template_section_header}>
        <div className={styles.label_group}>
          <div className={styles.label}>
            <span className={isRequired ? styles.required_mark : ""}>
              {label}
            </span>
          </div>
          {/* 템플릿 선택 */}
          <Button
            type={"select"}
            btn={{ label: `${label} 선택하기`, img: "/images/btn_select.svg" }}
            onClick={onClickBtn}
          />
        </div>
        {/* *최대 5개까지 선택 가능 */}
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
      {/* 하단 선택 된 셀렉 박스 section */}
      {!isGroup && data.length > 0 && (
        <div
          className={`${styles.select_box_wrapper} ${
            isGroup ? styles.group_wrapper : ""
          }`}
        >
          {optionText &&
            (optionText === "랜덤 발송" ? (
              <div className={styles.option}>
                {optionText}
                <i>
                  <img src="/images/random_none.svg" alt="랜덤발송" />
                </i>
              </div>
            ) : (
              <div className={styles.option}>
                <CheckBox checked={true} />
                <span>{optionText}</span>
              </div>
            ))}
          {data.length > 0 ? (
            <>
              <ul className={`${styles.select_box}`}>
                {label !== "대상자 그룹" &&
                  data.map((data) => (
                    <TemplateSelectItem styles={styles} data={data} />
                  ))}
                {label === "대상자 그룹" &&
                  data.map((data) => (
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

export default SelectSection;
