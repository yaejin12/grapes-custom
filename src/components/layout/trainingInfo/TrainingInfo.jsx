import React from "react";
import styles from "../layout.module.scss";
import SelectedItemBox from "../selectedItemBox/SelectedItemBox";

function TrainingInfo({}) {
  const trainingInfoText = [
    {
      img: "/images/info_t_name.svg",
      label: "훈련명",
      key: "name",
    },
    {
      img: "/images/info_calendar.svg",
      label: "훈련기간",
      key: "tDate",
    },
    {
      img: "/images/info_calendar.svg",
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
            <i>
              <img src={item?.img} loading="lazy" />
            </i>
            <div className={styles.label}>{item?.label}</div>
            <div className={styles.value}>{data[item?.key]}</div>
          </li>
        ))}
        {/* [s] item */}
        <li className={styles.info_item}>
          <i>
            <img src="/images/info_v.svg" loading="lazy" />
          </i>
          <div className={styles.label}>위반기준</div>
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
            <div className={styles.label_wrapper}>
              <i>
                <img src="/images/info_user.svg" loading="lazy" />
              </i>
              <div className={styles.label}>대상자</div>
            </div>
          </div>
          <SelectedItemBox title={"대상자"} />
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <div className={styles.label_wrapper}>
              <i>
                <img src="/images/info_template.svg" loading="lazy" />
              </i>
              <div className={styles.label}>메일 템플릿</div>
            </div>
          </div>
          <SelectedItemBox title={"메일 템플릿"} />
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <div className={styles.label_wrapper}>
              <i>
                <img src="/images/info_template.svg" loading="lazy" />
              </i>
              <div className={styles.label}>경고 템플릿</div>
            </div>
            {<div className={styles.label_tag}>사고신고서</div>}
          </div>
          <SelectedItemBox title={"경고 템플릿"} />
        </li>
        {/* [e]  select_box item */}
        {/* [s]  select_box item */}
        <li className={`${styles.info_item} ${styles.select_box}`}>
          <div className={styles.info_item_title_wrapper}>
            <div className={styles.label_wrapper}>
              <i>
                <img src="/images/info_template.svg" loading="lazy" />
              </i>
              <div className={styles.label}>교육 템플릿</div>
            </div>
            {<div className={styles.label_tag}>사고신고서</div>}
          </div>
          <SelectedItemBox title={"교육"} />
        </li>
        {/* [e]  select_box item */}
      </ul>
    </div>
  );
}

export default TrainingInfo;
