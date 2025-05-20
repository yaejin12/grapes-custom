import React from "react";
import styles from "./input.module.scss";
function FileInput({
  id,
  name,
  type,
  placeholder = "업로드할 파일을 선택하세요",
  value,
  onChange,
}) {
  return (
    <div className={`${styles.input_file_wrapper}`}>
      {/* file Input 처리 */}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={styles.common_input}
        readOnly
      />
      <div className={styles.file_box}>
        <label htmlFor="file" className={styles.file_label}>
          파일선택
        </label>
        <input type="file" id="file" onChange={onChange}></input>
      </div>
    </div>
  );
}

export default FileInput;
