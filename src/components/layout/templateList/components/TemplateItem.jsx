import React from "react";
import Button from "../../../common/button/Button";
import { useLocation } from "react-router-dom";
import {
  EDUCATION_TEMPLATES,
  MAIL_TEMPLATES,
} from "../../../../config/path.config";

function TemplateItem({ styles, data }) {
  const location = useLocation();
  const pathname = location.pathname;
  const mailTPg = pathname === MAIL_TEMPLATES;
  const educationTPg = pathname === EDUCATION_TEMPLATES;

  const mailInfoLabel = [
    {
      label: "훈련유형",
      key: "type",
    },
    {
      label: "메일제목",
      key: "subject",
    },
    {
      label: "발신자명",
      key: "fromName",
    },
    {
      label: "발신자 메일",
      key: "fromEmail",
    },
  ];

  const eduInfoLabel = [
    {
      label: "이름",
      key: "name",
    },
    {
      label: "분량",
      key: "length",
    },
    {
      label: "등록일",
      key: "createdAt",
    },
    {
      label: "설명",
      key: "des",
    },
  ];

  return (
    <>
      {/* [s] item */}
      <li className={styles.templates_item}>
        <div className={styles.item_title_wrapper}>
          {(mailTPg || educationTPg) && (
            <span className={styles.tag}>{data?.type}</span>
          )}
          <span className={styles.item_title}>{data?.name}</span>
        </div>
        <div className={styles.thumbnail_box}></div>
        {/* 메일 템플릿 일때 */}
        {mailTPg && (
          <ul className={styles.item_info_wrapper}>
            {mailInfoLabel?.map((labelItem) => (
              <li>
                <span className={styles.info_label}>{labelItem?.label}</span>
                <span className={styles.info_text}>
                  {data[labelItem?.key] || "-"}
                </span>
              </li>
            ))}
          </ul>
        )}
        {/* 교육 템플릿 일때 */}
        {educationTPg && (
          <ul className={styles.item_info_wrapper}>
            {eduInfoLabel?.map((labelItem) => (
              <li>
                <span className={styles.info_label}>{labelItem?.label}</span>
                <span className={styles.info_text}>
                  {data[labelItem?.key] || "-"}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.item_btn_wrapper}>
          <Button
            btn={{
              label: "수정",
              img: "/images/participant_modify.svg",
              style: "point_color",
            }}
            type={"template"}
          />
          <Button
            btn={{
              label: "복사",
              img: "/images/template_copy.svg",
              style: "gr_color",
            }}
            type={"template"}
          />
          <Button
            btn={{
              label: "삭제",
              img: "/images/templates_X.svg",
              style: "delete",
            }}
            type={"template"}
          />
        </div>
      </li>
      {/* [e] item */}
    </>
  );
}

export default TemplateItem;
