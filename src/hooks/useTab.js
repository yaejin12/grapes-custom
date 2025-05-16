import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useTab(initialTab = "") {
  const [tab, setTab] = useState(initialTab);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const handleTabClick = (id) => {
    setTab(id);
    if (pathname.startsWith("/setting")) navigate(`/setting/${id}`);
  };
  return { tab, handleTabClick };
}

export default useTab;
