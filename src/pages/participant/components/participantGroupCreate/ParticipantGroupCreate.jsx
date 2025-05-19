import React from "react";
import styles from "../../ParticipantGroup.module.scss";
import OrgTree from "../../../../components/orgTree/OrgTree";
import CommonInput from "./../../../../components/common/input/CommonInput";
import SearchInput from "../../../../components/common/input/SearchInput";
import CheckBox from "../../../../components/common/checkBox/CheckBox";
import Table from "../../../../components/layout/table/Table";
import { pGAddTHeader } from "../../../../config/uiConfig";
import { settingUserDummyData } from "../../../../config/dummyData";
import Button from "../../../../components/common/button/Button";
function ParticipantGroupCreate() {
  return (
    <div className={styles.p_g_create_wrapper}>
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
      {/* 센터 */}
      <div className={styles.center_wrapper}>
        <div className={styles.top_wrapper}>
          <div className={styles.group_label}>
            <span className={styles.required_mark}>대상자 그룹 명</span>
          </div>
          <CommonInput
            placeholder={"대상자 그룹명을 입력해주세요"}
            style={"round"}
          />
        </div>
        <div className={styles.bottom_wrapper}>
          {/* tool */}
          <div className={styles.table_tool_wrapper}>
            <SearchInput />
            <div className={styles.all_select_box}>
              <CheckBox />
              <span className={styles.all_select_label}>전체 선택</span>
            </div>
          </div>
          {/* table */}
          <Table
            header={pGAddTHeader}
            tStyle={"p_g_add"}
            data={settingUserDummyData}
          />
        </div>
      </div>
      {/* 오른쪽 */}
      <div className={styles.right_wrapper}>
        <div className={styles.title_wrapper}>
          <div className={styles.org_tree_title}>
            <span className={styles.org_title}>선택된 항목</span>
          </div>
        </div>
        <div className={styles.select_content_wrapper}>
          <ul>
            {/* [s] item */}
            <li className={styles.select_user_item_box}>
              <div className={styles.select_icon}>
                <img src="/images/select_check.svg" alt="선택된 대상자" />
              </div>
              <p className={styles.name}>이예진</p>
              <span className={styles.dept}>개발팀</span>
              <span className={styles.position}>주임</span>
            </li>
            {/* [e] item */}
          </ul>
        </div>
        <div className={styles.submit_btn_wrapper}>
          <Button btn={{ label: "취소", style: "gr_color" }} type={"submit"} />
          <Button btn={{ label: "등록" }} type={"submit"} />
        </div>
      </div>
    </div>
  );
}

export default ParticipantGroupCreate;
