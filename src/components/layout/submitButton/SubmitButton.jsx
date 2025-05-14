import React from "react";
import styles from "./submitButton.module.scss";
import Button from "../../common/button/Button";
function SubmitButton() {
  return (
    <div className={styles.submit_btn}>
      <Button btn={{ label: "취소", style: "gr_color" }} type={"submit"} />

      <Button btn={{ label: "제출" }} type={"submit"} />
    </div>
  );
}

export default SubmitButton;
