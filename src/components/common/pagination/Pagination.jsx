import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";
/**
 * pageCount - 총 페이지 수
 * onPageChange- 사용자가 페이지 번호를 클릭했을 때
 * 현재 선택된 페이지 번호(selected)를 알려주는 콜백 함수
 */
function Pagination({ pageCount = 12, onPageChange }) {
  const [selectedPage, setSelectedPage] = useState(1); // 현재 선택된 페이지

  const goToFirstPage = () => setSelectedPage(0);
  const goToLastPage = () => setSelectedPage(pageCount - 1);

  return (
    <div className={styles.pg_wrapper}>
      <button className={styles.first_pg} onClick={goToFirstPage}>
        <img src="/images/pagination_f.svg" alt="" />
      </button>
      <ReactPaginate
        forcePage={selectedPage}
        className={styles.pg_item}
        pageCount={pageCount}
        marginPagesDisplayed={0} // 앞/뒤 고정 페이지 없음
        pageRangeDisplayed={10}
        breakLabel={null}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        pageClassName={styles.item}
        pageLinkClassName={styles.link}
        previousClassName={styles.prev}
        nextClassName={styles.next}
        breakClassName={styles.break}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
        previousLabel={<img src="/images/pagination_prev.svg" alt="이전" />}
        nextLabel={<img src="/images/pagination_next.svg" alt="이전" />}
      />
      <button className={styles.last_pg} onClick={goToLastPage}>
        <img src="/images/pagination_last.svg" alt="" />
      </button>
    </div>
  );
}

export default Pagination;
