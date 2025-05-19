import React from "react";
import styles from "../../ParticipantGroup.module.scss";
import OrgTree from "../../../../components/orgTree/OrgTree";
import CommonInput from "../../../../components/common/input/CommonInput";
function ParticipantGroupRandom() {
  return (
    <div className={styles.p_g_random_wrapper}>
      {/* 왼쪽 */}
      <div className={styles.left_wrapper}>
        <div className={styles.title_wrapper}>
          <div className={styles.org_tree_title}>
            <span className={styles.tree_icon}>
              <img src="/images/tree.svg" alt="조직도" />
            </span>
            <span className={styles.org_title}>조직도</span>
          </div>
        </div>
        <OrgTree />
      </div>

      {/* 오른쪽 */}
      <div className={styles.right_wrapper}>
        <div className={styles.title_wrapper}>
          <span className={styles.title}>등록하기</span>
        </div>
        <div className={styles.bottom_wrapper}>
          {/* 대상자 그룹 명 */}
          <div className={styles.form_field}>
            <div className={styles.group_label}>
              <span className={styles.required_mark}>대상자 그룹 명</span>
            </div>
            <CommonInput placeholder={"대상자 그룹명을 입력해주세요"} />
          </div>
          {/* 부서 선택 */}
          <div className={styles.form_field}>
            <div className={styles.group_label}>
              <span className={styles.required_mark}>부서 선택</span>
            </div>
            <div className={styles.select_dept_wrapper}>
              <ul>
                <li className={styles.select_dept_item}>
                  <div className={styles.dept_box}>
                    <div className={styles.dept_icon}>
                      <img src="/images/select_dept.svg" alt="" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantGroupRandom;
