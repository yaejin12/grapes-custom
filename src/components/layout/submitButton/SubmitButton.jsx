import React from "react";
import styles from "./submitButton.module.scss";
import Button from "../../common/button/Button";
function SubmitButton({
  submitLabel = "제출",
  handlerSubmitBtnClick,
  handlerCancelBtnClick,
}) {
  return (
    <div className={styles.submit_btn}>
      <Button
        btn={{
          label: "취소",
          style: "gr_color",
        }}
        type={"submit"}
        handlerClick={handlerCancelBtnClick}
      />
      <Button
        btn={{
          label: submitLabel,
        }}
        type={"submit"}
        handlerClick={handlerSubmitBtnClick}
      />
    </div>
  );
}

export default SubmitButton;
