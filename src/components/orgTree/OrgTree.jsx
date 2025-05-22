import React, { useState } from "react";
import styles from "./orgTree.module.scss";
import SearchInput from "../common/input/SearchInput";
import CustomTree from "./components/CustomTree";
import { orgTreeData } from "../../config/dummyData";

function OrgTree({ data, handlerDeptAddClick }) {
  return (
    <>
      <div className={styles.search_org}>
        <SearchInput inputStyle={"tree"} placeholder={"직원을 검색해 주세요"} />
      </div>
      <div className={styles.org_section}>
        <CustomTree
          styles={styles}
          data={orgTreeData}
          handlerDeptAddClick={handlerDeptAddClick}
        />
      </div>
    </>
  );
}

export default OrgTree;
