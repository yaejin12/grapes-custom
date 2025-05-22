import React from "react";
import Button from "../../../components/common/button/Button";
import TemplateSelectItem from "./TemplateSelectItem";

function SelectSection({
  styles,
  label,
  caption,
  data = [],
  optionText,
  onClickBtn,
}) {
  const isRequired = label?.includes("메일");

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
            handlerClick={onClickBtn}
            data-id={label}
          />
        </div>
        {/* *최대 5개까지 선택 가능 */}
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
      {/* 하단 선택 된 셀렉 박스 section */}
      {data.length > 0 && (
        <div className={`${styles.select_box_wrapper}`}>
          {optionText && (
            <div className={styles.option}>
              {optionText}
              <i>
                <img src="/images/random_none.svg" alt="랜덤발송" />
              </i>
            </div>
          )}
          {data.length > 0 ? (
            <>
              <ul className={`${styles.select_box}`}>
                {data?.map((data) => (
                  <TemplateSelectItem styles={styles} data={data} />
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
