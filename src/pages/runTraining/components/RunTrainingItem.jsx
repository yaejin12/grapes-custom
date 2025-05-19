import React, { useState } from "react";
import Button from "../../../components/common/button/Button";
import { NavLink } from "react-router-dom";
import StatusBar from "./StatusBar";

function RunTrainingItem({ styles, data }) {
  return (
    <>
      {/* [s] item */}
      <li className={styles.templates_item}>
        <NavLink to={`/run-training/${data?.id}`}>
          <div className={styles.item_title_wrapper}>
            <span className={styles.item_title}>{data?.title}</span>
          </div>
          {/* 훈련현황 */}
          <div className={styles.status_wrapper}>
            <StatusBar data={data} />
          </div>

          <ul className={styles.item_info_wrapper}>
            <li>
              <span className={styles.info_label}>
                <img src="/images/run_user.svg" alt="" />
                참가자
              </span>
              <span className={styles.info_text}>{data?.participants}</span>
            </li>
            <li>
              <span className={styles.info_label}>
                <img src="/images/run_mail.svg" alt="" />
                메일 템플릿
              </span>
              <span className={styles.info_text}>{data?.template}</span>
            </li>
            <li>
              <span className={styles.info_label}>
                <img src="/images/info_v.svg" alt="" />
                위반기준
              </span>
              <span className={styles.info_text}>
                <span className={styles.tag}>링크클릭</span>
                <span className={styles.tag}>링크클릭</span>
                <span className={styles.tag}>링크클릭</span>
              </span>
            </li>
            <li>
              <span className={styles.info_label}>
                <img src="/images/run_days.svg" alt="" />
                훈련기간
              </span>
              <span className={styles.info_text}>{data?.trainingPeriod}</span>
            </li>
            <li>
              <span className={styles.info_label}>
                <img src="/images/run_days.svg" alt="" />
                교육기간
              </span>
              <span className={styles.info_text}>{data?.educationPeriod}</span>
            </li>
          </ul>
        </NavLink>
        <div className={styles.item_btn_wrapper}>
          {/* <Button
            btn={{ label: "즉시발송", style: "point_color" }}
            type={"run"}
            disabled={true}
          />
          <Button
            btn={{ label: "일시정지", style: "gr_color" }}
            type={"run"}
            disabled={true}
          />
          <Button
            btn={{ label: "다시발송", style: "replay" }}
            type={"run"}
            disabled={true}
          /> */}
          {/* 발송 대기상태일 때 */}
          <Button
            btn={{ label: "즉시발송", style: "point_color" }}
            type={"run"}
          />
          <Button
            btn={{
              label: "수정",
              img: "/images/participant_modify.svg",
              style: "point_color",
            }}
            type={"template"}
          />
          <Button
            btn={{
              label: "삭제",
              img: "/images/templates_X.svg",
              style: "delete",
            }}
            type={"template"}
          />
        </div>
      </li>
      {/* [e] item */}
    </>
  );
}

export default RunTrainingItem;
