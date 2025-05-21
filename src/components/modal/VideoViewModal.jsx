import React from "react";
import styles from "./modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import useShowModal from "../../hooks/useShowModal";
import { showModalActions } from "../../store/Modal-slice";
function VideoViewModal({ children, title }) {
  const isShowVideoModal = useSelector(
    (state) => state.showModal.showVideoModal
  );
  const dispatch = useDispatch();
  // 모달 취소 클릭
  const handlerCancelBtnClick = ({}) => {
    dispatch(showModalActions.ShowVideoModalAction(false));
  };

  return (
    <div
      className={`${styles.modal_layout}  ${
        isShowVideoModal ? styles.modal_action : ""
      }`}
    >
      {/* 팝업 영역 */}
      <div className={styles.popup_video_box}>
        <div className={styles.title_header}>
          <p className={styles.title_text}>{title}훈련정보입니다</p>
          <button onClick={handlerCancelBtnClick}>
            <img src="/images/modal_X.svg" alt="" />
          </button>
        </div>
        <div className={styles.content_wrapper}>{children}</div>
      </div>
    </div>
  );
}

export default VideoViewModal;
