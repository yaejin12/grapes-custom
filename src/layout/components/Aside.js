import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Aside({ styles }) {
  const [actionLnbItem, setActiveLnbItem] = useState("status");

  //   [s] 함수
  const toggleAccordionItem = (item) => {
    setActiveLnbItem(item);
  };

  //   로그아웃
  const handleLogoutClick = () => {};
  //   [e] 함수
  return (
    <aside>
      <div className={styles.logo_wrapper}>
        <div className={styles.aside_inner}>
          <div className={styles.logo}>
            <h1>MCTS</h1>
            <span>v3.1</span>
          </div>
        </div>
      </div>
      {/* lnb */}
      <div className={styles.accordion_lnb_wrapper}>
        <div>
          {/* [s] lnb item */}
          <div
            className={`${styles.lnb_item} ${
              actionLnbItem === "status" ? styles.btn_accordion_action : ""
            }`}
          >
            <button onClick={() => toggleAccordionItem("status")}>
              <i>
                <img src="/images/menu_status.svg" alt=""></img>
              </i>
              <p>훈련현황</p>
            </button>
            <ul className={styles.lnb_sub_wrapper}>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>실시간현황</li>
              </NavLink>
              <NavLink
                to={"/status"}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>종합현황</li>
              </NavLink>
            </ul>
          </div>
          {/* [e] lnb item */}
          {/* [s] lnb item */}
          <div
            className={`${styles.lnb_item} ${
              actionLnbItem === "pre" ? styles.btn_accordion_action : ""
            }`}
          >
            <button onClick={() => toggleAccordionItem("pre")}>
              <i>
                <img src="/images/menu_t_setting.svg" alt=""></img>
              </i>
              <p>훈련설정</p>
            </button>
            <ul className={styles.lnb_sub_wrapper}>
              <NavLink
                to={"/participant-group"}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>대상자 그룹</li>
              </NavLink>
              <NavLink
                to={"/mail-templates"}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>메일 템플릿</li>
              </NavLink>
              <NavLink
                to={"/phishing-templates"}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>피싱 템플릿</li>
              </NavLink>
              <NavLink
                to={"/warning-templates"}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>경고 템플릿</li>
              </NavLink>
              <NavLink
                to={"/education-templates"}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>교육</li>
              </NavLink>
            </ul>
          </div>
          {/* [e] lnb item */}
          {/* [s] lnb item */}
          <div
            className={`${styles.lnb_item} ${
              actionLnbItem === "reg" ? styles.btn_direct_action : ""
            }`}
          >
            <NavLink to={"/create-training"}>
              <button onClick={() => toggleAccordionItem("reg")}>
                <i>
                  <img src="/images/menu_add.svg" alt=""></img>
                </i>
                <p>훈련등록</p>
              </button>
            </NavLink>
          </div>
          {/* [e] lnb item */}
          {/* [s] lnb item */}
          <div
            className={`${styles.lnb_item} ${
              actionLnbItem === "run" ? styles.btn_direct_action : ""
            }`}
          >
            <button onClick={() => toggleAccordionItem("run")}>
              <i>
                <img src="/images/menu_start.svg" alt=""></img>
              </i>
              <p>훈련실행</p>
            </button>
          </div>
          {/* [e] lnb item */}
          {/* [s] lnb item */}
          <div
            className={`${styles.lnb_item} ${
              actionLnbItem === "res" ? styles.btn_direct_action : ""
            }`}
          >
            <button onClick={() => toggleAccordionItem("res")}>
              <i>
                <img src="/images/menu_result.svg" alt=""></img>
              </i>
              <p>훈련결과</p>
            </button>
          </div>
          {/* [e] lnb item */}
          {/* [s] lnb item */}
          <div
            className={`${styles.lnb_item} ${
              actionLnbItem === "rpt" ? styles.btn_direct_action : ""
            }`}
          >
            <button onClick={() => toggleAccordionItem("rpt")}>
              <i>
                <img src="/images/menu_report.svg" alt=""></img>
              </i>
              <p>보고서</p>
            </button>
          </div>
          {/* [e] lnb item */}
          {/* [s] lnb item */}
          <div
            className={`${styles.lnb_item} ${
              actionLnbItem === "setting" ? styles.btn_direct_action : ""
            }`}
          >
            <button onClick={() => toggleAccordionItem("setting")}>
              <i>
                <img src="/images/menu_setting.svg" alt=""></img>
              </i>
              <p>환경설정</p>
            </button>
          </div>
          {/* [e] lnb item */}
        </div>
        {/* [s] 로그아웃*/}
        <div className={`${styles.lnb_item}`}>
          <button onClick={handleLogoutClick} className={styles.logout_btn}>
            <i>
              <img src="/images/LogOut.svg" alt=""></img>
            </i>
            <p>로그아웃</p>
          </button>
        </div>
        {/* [e] 로그아웃 */}
      </div>
    </aside>
  );
}

export default Aside;
