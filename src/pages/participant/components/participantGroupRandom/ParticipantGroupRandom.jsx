import React from "react";
import styles from "../../ParticipantGroup.module.scss";
import OrgTree from "../../../../components/orgTree/OrgTree";
import CommonInput from "../../../../components/common/input/CommonInput";
import Button from "./../../../../components/common/button/Button";
import { type } from "@testing-library/user-event/dist/type";
import CountControlBtn from "../../../../components/common/button/CountControlBtn";
function ParticipantGroupRandom() {
  const handlerDeptAddClick = (e, node) => {
    e.stopPropagation(); //버블링 막기
  };
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
        <OrgTree handlerDeptAddClick={handlerDeptAddClick} />
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
            {/* select  */}
            <div className={styles.select_dept_wrapper}>
              <ul>
                {/* [s] item */}
                <li className={styles.select_dept_item}>
                  <div className={styles.dept_box}>
                    <div className={styles.dept_icon}>
                      <img src="/images/select_dept.svg" alt="부서 아이콘" />
                    </div>
                    <p className={styles.dept_text}>
                      <span className={styles.ellipsis}>도시계획관리</span>
                    </p>
                  </div>
                  <div className={styles.dept_num_count_control_wrapper}>
                    <div className={styles.num_count_control_box}>
                      <CountControlBtn type={"minus"} />
                      <div className={styles.input_wrapper}>
                        <CommonInput style={"count_control"} />
                      </div>
                      <p className={styles.persons_text}>명</p>
                      <CountControlBtn type={"plus"} />
                    </div>
                    <Button btn={{ label: "삭제" }} type={"table"} />
                  </div>
                </li>
                {/* [e] item */}
              </ul>
            </div>
          </div>

          {/* 취소 삭제 버튼 */}
          <div className={styles.submit_btn_wrapper}>
            <Button
              btn={{ label: "취소", style: "gr_color" }}
              type={"submit"}
            />
            <Button btn={{ label: "등록" }} type={"submit"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantGroupRandom;
