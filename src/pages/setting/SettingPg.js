import React, { useEffect, useState } from "react";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import styles from "./setting.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import Tab from "../../components/common/tab/Tab";
import { settingTabLabel } from "../../config/uiConfig";
import useTab from "./../../hooks/useTab";
function SettingPg() {
  const location = useLocation();
  const pathname = location.pathname;
  const isSettingPg = pathname.startsWith("/setting");
  const { tab: activeTab, handleTabClick, setTab } = useTab("user"); //tab

  // pathname과 tab 동기화
  useEffect(() => {
    if (isSettingPg) {
      const tabName = pathname.replace("/setting/", "");
      console.log(tabName);
      setTab(tabName);
    }
  }, []);
  return (
    <PgTitle h3={"환경설정"}>
      <section className={`${styles.section_box}`}>
        <div className={styles.content}>
          <div className={styles.tab_wrapper}>
            <Tab
              tabs={settingTabLabel}
              onClick={handleTabClick}
              isActive={activeTab}
            />
          </div>
          {/* 직원관리 */}
          <Outlet />
        </div>
      </section>
    </PgTitle>
  );
}

export default SettingPg;
