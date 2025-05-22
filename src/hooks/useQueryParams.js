import React from "react";
import { useSearchParams } from "react-router-dom";

function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  // 가져오기
  const getParam = (key) => searchParams.get(key);

  //   추가하기
  const setParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams, { replace: true });
  };

  //   삭제하기
  const removeParam = (key) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams, { replace: true });
  };

  return { getParam, setParam, removeParam, searchParams, setSearchParams };
}

export default useQueryParams;
