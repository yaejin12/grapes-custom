import React from "react";
import styles from "./submitButton.module.scss";
import Button from "../../common/button/Button";
function SubmitButton({ submitLabel = "제출", handlerSubmitBtnClick }) {
  return (
    <div className={styles.submit_btn}>
      <Button btn={{ label: "취소", style: "gr_color" }} type={"submit"} />
      <Button
        btn={{
          label: submitLabel,
          ...(handlerSubmitBtnClick && { handler: handlerSubmitBtnClick }),
        }}
        type={"submit"}
      />
    </div>
  );
}

export default SubmitButton;
