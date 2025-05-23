import React from "react";
import styles from "./radioBox.module.scss";

function RadioBox({ id, onChange, checked, label, name, data }) {
  return (
    <label className={styles.radio} htmlFor={id}>
      <input
        type="radio"
        id={id}
        checked={checked}
        name={name}
        onChange={(e) => {
          onChange && onChange(e, id);
        }}
      />
      {label}
    </label>
  );
}

export default RadioBox;
