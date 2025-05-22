import React from "react";
import styles from "./trainingInfo.module.scss";

import Label from "./components/Label";
import SelectedItemBox from "./components/SelectedItemBox";

function TrainingInfo({}) {
  const trainingInfoText = [
    {
      label: "훈련명",
      key: "name",
    },
    {
      label: "훈련기간",
      key: "tDate",
    },
    {
      label: "교육기간",
      key: "name",
    },
  ];

  const data = {
    name: "광주시청 이메일 솔루션 훈련",
    tDate: "2020-05-05 ~ 2020-05-05",
    v: ["메일열람", "링크클릭", "피싱입력"],
  };
  return (
    <div className={styles.info_content_wrapper}>
      <ul className={styles.info_content}>
        {/* [s] item */}
        {trainingInfoText?.map((item) => (
          <li className={styles.info_item}>
            <Label label={item?.label} />
            <div className={styles.value}>{data[item?.key]}</div>
          </li>
        ))}
        {/* [s] item */}
        <li className={styles.info_item}>
          <Label label={"위반기준"} />
          <div className={styles.value}>
            {data?.v?.map((v) => (
              <span className={styles.tag}>{v}</span>
            ))}
          </div>
        </li>
        {/* [e] item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <Label label={"대상자"} />
          </div>
          <SelectedItemBox title={"대상자"} />
          
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <Label label={"메일 템플릿"} />
          </div>
          <SelectedItemBox title={"메일 템플릿"} />
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <Label label={"경고 템플릿"} />
            {<div className={styles.label_tag}>사고신고서</div>}
          </div>
          <SelectedItemBox title={"경고 템플릿"} />
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <Label label={"교육"} />
            {<div className={styles.label_tag}>교안</div>}
          </div>
          <SelectedItemBox title={"교육"} />
        </li>
        {/* [e]  select_box item */}
      </ul>
    </div>
  );
}

export default TrainingInfo;
