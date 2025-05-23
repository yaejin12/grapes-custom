import React from "react";
import styles from "./trainingInfo.module.scss";
import SelectedItemBox from "./components/SelectedItemBox";
import InfoLabel from "../../ui/label/InfoLabel";
import Tag from "../../ui/tag/Tag";

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
            <InfoLabel label={item?.label} />
            <div className={styles.value}>{data[item?.key]}</div>
          </li>
        ))}
        {/* [s] item */}
        <li className={styles.info_item}>
          <InfoLabel label={"위반기준"} />
          <div className={styles.value}>
            {data?.v?.map((v) => (
              <Tag text={v} styleType={"info"} />
            ))}
          </div>
        </li>
        {/* [e] item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <InfoLabel label={"대상자"} />
          </div>
          <SelectedItemBox title={"대상자"} />
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <InfoLabel label={"메일 템플릿"} />
          </div>
          <SelectedItemBox title={"메일 템플릿"} />
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <InfoLabel label={"경고 템플릿"} tag={"사고신고서"} />

          <SelectedItemBox title={"경고 템플릿"} />
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <InfoLabel label={"교육"} tag={"교안"} />

          <SelectedItemBox title={"교육"} />
        </li>
        {/* [e]  select_box item */}
      </ul>
    </div>
  );
}

export default TrainingInfo;
