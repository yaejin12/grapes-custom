import React, { useEffect } from "react";
import styles from "./modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SubmitButton from "./../layout/submitButton/SubmitButton";
import { showModalActions } from "./../../store/Modal-slice";
function FileUploadModalLayout({ children }) {
  const showModal = useSelector((state) => state.showModal.showModal);
  const dispatch = useDispatch();
  // 모달 취소 클릭
  const handlerCancelBtnClick = () => {
    dispatch(showModalActions.ShowModalAction(false));
  };
  //모달이 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
    return () => document.body.classList.remove("no_scroll"); // 컴포넌트가 언마운트되면 스크롤 복원
  }, [showModal]);

  return (
    <div
      className={`${styles.modal_layout}  ${
        showModal ? styles.modal_action : ""
      }`}
    >
      {/* 팝업 영역 */}
      <div className={styles.popup_box}>
        <div className={styles.title_header}>
          <p className={styles.title_text}>PDF 파일 업로드</p>
        </div>
        <div className={styles.content_wrapper}>{children}</div>
        <div className={styles.submit_wrapper}>
          <SubmitButton handlerCancelBtnClick={handlerCancelBtnClick} />
        </div>
      </div>
    </div>
  );
}

export default FileUploadModalLayout;
