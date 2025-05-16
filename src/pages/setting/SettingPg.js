import React from "react";
import PgTitle from "../../components/layout/pgTitle/PgTitle";
import styles from "./setting.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import Tab from "../../components/common/tab/Tab";
function SettingPg() {
  const location = useLocation();
  const pathname = location.pathname;
  const isSettingPg = pathname === "/setting";

  return (
    <PgTitle h3={"환경설정"}>
      {isSettingPg && (
        <section className={`${styles.section_box}`}>
          <div className={styles.content}>
            <div className={styles.tab_wrapper}>
              <Tab />
            </div>
          </div>
        </section>
      )}
      <Outlet />
    </PgTitle>
  );
}

export default SettingPg;
