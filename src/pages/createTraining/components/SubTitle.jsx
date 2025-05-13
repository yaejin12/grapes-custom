import React from "react";

function SubTitle({ styles, title, icon, children }) {
  return (
    <>
      <div className={styles.sub_title_wrapper}>
        {icon && (
          <i>
            <img src={icon} alt={title} />
          </i>
        )}
        <p className={styles.sub_title}>{title}</p>
      </div>
      <div className={styles.content_wrapper}>{children}</div>
    </>
  );
}

export default SubTitle;
