import React from "react";
import styles from "../setting.module.scss";
import OrgTree from "../../../components/orgTree/OrgTree";
import Table from "./../../../components/layout/table/Table";
import MoreBtn from "../../../components/common/button/MoreBtn";
import { settingUserTHeader } from "../../../config/uiConfig";
import { settingUserDummyData } from "../../../config/dummyData";

function UserTabPg() {
  return (
    <div className={styles.user_tab_pg_section}>
      {/* [s] left_content */}
      <div className={styles.left_content}>
        <div className={styles.title_wrapper}>
          <div className={styles.org_tree_title}>
            <span className={styles.tree_icon}>
              <img src="/images/tree.svg" alt="조직도" />
            </span>
            <span className={styles.org_title}>조직도</span>
          </div>
          <MoreBtn />
        </div>
        <OrgTree />
      </div>
      {/* [e] left_content */}
      <div className={styles.right_content}>
        <Table
          header={settingUserTHeader}
          data={settingUserDummyData}
          tStyle={"setting_user"}
        />
      </div>
    </div>
  );
}

export default UserTabPg;
