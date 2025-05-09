import React from "react";

function Header({ styles }) {
  return (
    <header>
      <div className={styles.inner}>
        <div className={styles.header_wrapper}>
          <h2>이메일 훈련 솔루션 MCTS v3.1</h2>
          <div className={styles.user_wrapper}>
            <i className={styles.user_icon}>
              <img src="/images/UserRound.svg"></img>
            </i>
            <span className={styles.user_name}>홍길동</span>
            <span className={styles.user_suffix}>님</span>
            <i className={styles.vector_icon}>
              <img src="/images/Vector.svg" alt="" />
            </i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
