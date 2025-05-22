import React from "react";
import styles from "./checkBox.module.scss";

function CheckBox({ id, checked, onChange, data, children }, ref) {
  return (
    <>
      <label>
        <input
          className={styles.checkboxInput}
          type="checkbox"
          id={id}
          checked={checked}
          // onChange={(e) => {
          //   onChange?.(e, id, data);
          // }}
          onChange={(e) => onChange(e.target.checked)}
          ref={ref}
        />
        <span></span>
        {children}
      </label>
    </>
  );
}

export default React.forwardRef(CheckBox);
