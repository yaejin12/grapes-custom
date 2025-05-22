import React, { useState } from "react";
import styles from "./pdfViewer.module.scss";
import { Document, Page, pdfjs } from "react-pdf";
import Loading from "../loading/Loading";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function PdfViewer({ url = "" }) {
  const [pageNumber, setPageNumber] = useState(1); // 현재 페이지
  const [numPages, setNumPages] = useState(null); // 총 페이지 수

  const handleLoadSuccess = ({ numPages }) => {
    setTimeout(() => {
      setNumPages(numPages);
    }, 400);
  };

  const goPrevPage = () => {
    setPageNumber((prev) => Math.max(1, prev - 1));
  };

  const goNextPage = () => {
    setPageNumber((prev) => Math.min(numPages, prev + 1));
  };

  return (
    <>
      <div className={styles.pdf_viewer_wrapper}>
        <button
          className={styles.pg_prev_btn}
          onClick={goPrevPage}
          disabled={pageNumber <= 1}
        >
          <img src="/images/pdf_prev.svg" alt="이전 페이지" />
        </button>
        <div className={styles.react_pdf_wrapper}>
          <Document file={url} onLoadSuccess={handleLoadSuccess}>
            {numPages !== null ? (
              <Page
                height={600}
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ) : (
              <>
                <Loading />
              </>
            )}
          </Document>
        </div>
        <button
          className={styles.pg_next_btn}
          onClick={goNextPage}
          disabled={pageNumber >= numPages}
        >
          <img src="/images/pdf_next.svg" alt="다음 페이지" />
        </button>
      </div>
    </>
  );
}

export default PdfViewer;
