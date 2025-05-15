import React, { useState } from "react";
import Label from "../../../components/layout/trainingInfo/components/Label";
import SelectedItemBox from "../../../components/layout/trainingInfo/components/SelectedItemBox";

function TrainingInfo({ styles }) {
  const [isMoreBtnClick, setIsMoreBtnClick] = useState(false);
  const handlerMoreClick = () => {
    setIsMoreBtnClick((prev) => !prev);
  };

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
    <>
      <div className={styles.training_info_wrapper}>
        <div className={styles.training_info_title}>
          <div className={styles.result_box_title}>훈련정보</div>
          <button
            className={styles.training_info_more_btn}
            onClick={handlerMoreClick}
          >
            자세히 보기
            <span>
              {
                <img
                  src={
                    isMoreBtnClick
                      ? "/images/t_result_more_action.svg"
                      : "/images/t_result_more.svg"
                  }
                  alt="자세히 보기"
                />
              }
            </span>
          </button>
        </div>
        {/* 더보기 클릭 시 */}
        <div
          className={`${styles.more_info_wrapper} ${
            isMoreBtnClick ? styles.action : ""
          }`}
        >
          <div className={styles.more_info_box}>
            <div className={styles.more_info_content}>
              <div className={styles.more_info_top}>
                <ul>
                  {trainingInfoText?.map((item) => (
                    <li className={styles.info_item}>
                      <Label label={item?.label} />
                      <div className={styles.value}>
                        {data[item?.key] ?? "-"}
                      </div>
                    </li>
                  ))}
                  <li className={styles.info_item}>
                    <Label label={"위반기준"} />
                    <div className={styles.value}>
                      {data?.v?.map((v) => (
                        <span className={styles.tag}>{v}</span>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.more_info_bottom}>
                <div className={styles.left_layout}>
                  <Label label={"대상자"} />
                  <SelectedItemBox title={"교육"} />
                  <div className={styles.layout_bottom}>
                    <Label label={"신고서 템플릿"} />
                    <SelectedItemBox title={"템플릿"} />
                  </div>
                </div>

                <div className={styles.right_layout}>
                  <Label label={"메일 템플릿"} />
                  <SelectedItemBox title={"교육"} />
                  <div className={styles.layout_bottom}>
                    <Label label={"교육"} />
                    <SelectedItemBox title={"템플릿"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainingInfo;
