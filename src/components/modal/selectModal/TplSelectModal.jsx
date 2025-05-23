import React, { useState } from "react";
import styles from "./selectModal.module.scss";
import ModalLayout from "../ModalLayout";
import { useSelector } from "react-redux";
import SearchInput from "../../common/input/SearchInput";
import FilterBox from "../../filterBox/FilterBox";
import { mailFilterData } from "../../../config/uiConfig";
import CheckBox from "../../common/checkBox/CheckBox";

function TplSelectModal({ isCurrentPath = false, modalType }) {
  const isShowModal = useSelector((state) => state.showModal.showTplListModal);
  const [selectedFilter, setSelectedFilter] = useState(["all"]);
  const [formData, setFormData] = useState({});

  // <--- 랜덤 발송 체크박스 클릭
  const handlerRandomCheckBoxClick = (checked) => {
    setFormData((prev) => ({ ...prev, random: checked }));
    console.log(checked);
  };
  // 랜덤 발송 체크박스 클릭 --->
  // <--- 다중필터링
  const handlerFilterBtnClick = (selectKey) => {
    if (selectKey === "all") return setSelectedFilter(["all"]);

    setSelectedFilter((prev) => {
      const filtered = prev?.filter((item) => item !== "all");
      const isSelected = filtered?.includes(selectKey);

      let next;
      if (isSelected) {
        next = filtered?.filter((item) => item !== selectKey);
      } else {
        next = [...filtered, selectKey];
      }

      // 아무것도 선택되지 않았으면 "all" 자동 추가
      return next?.length === 0 ? ["all"] : next;
    });
  };
  // 다중필터링 --->

  return (
    <>
      {isCurrentPath && isShowModal && (
        <ModalLayout title={`${modalType} 선택`}>
          <div className={styles.tpl_inner}>
            {/* [s] 상단 검색 */}
            <div className={styles.search_wrapper}>
              <SearchInput inputStyle={"width100"} />
            </div>
            {/* [e] 상단 검색 */}
            {/* [s] 다중 필터링 */}
            {modalType === "메일 템플릿" && (
              <div className={styles.filter_wrapper}>
                <FilterBox
                  style={"tpl_select"}
                  data={mailFilterData}
                  onClick={handlerFilterBtnClick}
                  selected={selectedFilter}
                />
                <div className={styles.random_wrapper}>
                  <CheckBox onChange={handlerRandomCheckBoxClick}>
                    <p className={styles.check_box_label}>랜덤발송</p>
                  </CheckBox>
                </div>
              </div>
            )}
            {/* [e] 다중 필터링 */}
            {/* [s] 템플릿 리스트 */}
            <div
              className={`${styles.tpl_list_wrapper} ${
                modalType === "메일 템플릿" ? "" : styles.none_info
              }`}
            >
              <ul className={styles.tpl_list}>
                <li className={`${styles.tpl_item} ${styles.action}`}>
                  <div className={styles.header}>템플릿 명 타이틀</div>
                  <div className={styles.thumbnail_box}>
                    <img src="" alt="" />
                  </div>
                  {modalType === "메일 템플릿" && (
                    <div className={styles.tpl_info_wrapper}>
                      <div className={styles.info_item}>
                        <span className={styles.tag}>메일 클릭형</span>
                      </div>
                      <div className={styles.info_item}>
                        <span className={styles.info_label}>훈련유형</span>
                        <span className={styles.info_value}>이메일</span>
                      </div>
                      <div className={styles.info_item}>
                        <span className={styles.info_label}>메일제목</span>
                        <span className={styles.info_value}>
                          세금 미납 확인 부탁드립니다.
                        </span>
                      </div>
                      <div className={styles.info_item}>
                        <span className={styles.info_label}>발신자명</span>
                        <span className={styles.info_value}>국세청</span>
                      </div>
                      <div className={styles.info_item}>
                        <span className={styles.info_label}>발신자 메일</span>
                        <span className={styles.info_value}>
                          hfeioflo@naver.com
                        </span>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            {/* [e] 템플릿 리스트 */}
          </div>
        </ModalLayout>
      )}
    </>
  );
}

export default TplSelectModal;
