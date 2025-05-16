import React, { useState } from "react";
import styles from "./orgTree.module.scss";
import SearchInput from "../common/input/SearchInput";
import CustomTree from "./components/CustomTree";
import { orgTreeData } from "../../config/dummyData";

function OrgTree({ data }) {
  return (
    <>
      <div className={styles.search_org}>
        <SearchInput type={"tree"} placeholder={"직원을 검색해 주세요"} />
      </div>
      <div className={styles.org_section}>
        <CustomTree styles={styles} data={orgTreeData} />
      </div>
    </>
  );
}

export default OrgTree;
