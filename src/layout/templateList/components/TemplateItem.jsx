import React from "react";
import Button from "../../../components/common/button/Button";
import { useLocation } from "react-router-dom";

function TemplateItem({ styles }) {
  const location = useLocation();
  const pathname = location.pathname;
  const mailTPg = pathname === "/mail-templates";
  return (
    <>
      {/* [s] item */}
      <li className={styles.templates_item}>
        <div className={styles.item_title_wrapper}>
          {mailTPg && <span className={styles.tag}>링크클릭</span>}
          <span className={styles.item_title}>템플릿명 텍스트</span>
        </div>
        <div className={styles.thumbnail_box}></div>
        {mailTPg && (
          <ul className={styles.item_info_wrapper}>
            <li>
              <span className={styles.info_label}>훈련유형</span>
              <span className={styles.info_text}>이메일</span>
            </li>
            <li>
              <span className={styles.info_label}>메일제목</span>
              <span className={styles.info_text}>
                세금 미납 확인 부탁드립니다.
              </span>
            </li>
            <li>
              <span className={styles.info_label}>발신자명</span>
              <span className={styles.info_text}>국세청</span>
            </li>
            <li>
              <span className={styles.info_label}>발신자 메일</span>
              <span className={styles.info_text}>hfeioflo@naver.com</span>
            </li>
          </ul>
        )}
        <div className={styles.item_btn_wrapper}>
          <Button label={"수정"} type={"template"} />
          <Button label={"복사"} type={"template"} />
          <Button label={"삭제"} type={"template"} />
        </div>
      </li>
      {/* [e] item */}
    </>
  );
}

export default TemplateItem;
