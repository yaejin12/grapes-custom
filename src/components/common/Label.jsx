import React from 'react'
import st
function Label() {
  return (
    <div className={`${styles.label}`}>
      <span className={styles.required_mark}>피싱 템플릿명</span>
    </div>
  );
}

export default Label;