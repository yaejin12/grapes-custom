import React from "react";
import styles from "./checkBox.module.scss";

function CheckBox({ id, checked, onChange, data, label }, ref) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => {
          onChange?.(e, id, data);
        }}
        ref={ref}
      />
      <label htmlFor={id} className={styles.checkbox_label}></label>
    </>
  );
}

export default React.forwardRef(CheckBox);
