import React from "react";
import styles from "./tplComponents.module.scss";
import CommonInput from "../../../components/common/input/CommonInput";

function CreateTplLabeledInput({ field, placeholder, name, value, onChange }) {
  return (
    <div className={styles.content_item}>
      <div className={`${styles.label}`}>
        <span className={styles.required_mark}>{field?.label}</span>
      </div>
      <div className={styles.form_field}>
        <CommonInput
          placeholder={field.placeholder}
          onChange={onChange}
          value={value}
          name={field?.key}
        />
      </div>
    </div>
  );
}

export default CreateTplLabeledInput;
