import React from "react";
import styles from "./selectModal.module.scss";
import ModalLayout from "../ModalLayout";
import { useSelector } from "react-redux";
import SelectedItem from "../../ui/selectedList/SelectedItem";

function GroupSelectModal({ isCurrentPath = false }) {
  const isShowGroupListModal = useSelector(
    (state) => state.showModal.showGroupListModal
  );

  return (
    <>
      {isCurrentPath && isShowGroupListModal && (
        <ModalLayout title={`대상자 그룹 선택`}>
          <div className={styles.group_inner}>
            <div className={styles.title}>등록된 대상자 그룹</div>
            <div className={styles.group_list_wrapper}>
              <ul className={styles.group_list}>
                {/* <li className={styles.group_item}></li> */}
                <SelectedItem
                  styleType={"line"}
                  actionBtn={"checkBox"}
                  isChecked={true}
                  icon={"group"}
                  hashTag={true}
                />
              </ul>
            </div>
          </div>
        </ModalLayout>
      )}
    </>
  );
}

export default GroupSelectModal;
