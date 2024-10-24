import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getViewName } from "../models/HistoryBackContent";

export const useHistoryBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [viewName, setViewName] = useState("");

  useEffect(() => {
    const name = getViewName(location.pathname);
    setViewName(name);
  }, [location.pathname]);

  const goBack = () => {
    navigate(-1);
  };

  return { goBack, viewName };
};
