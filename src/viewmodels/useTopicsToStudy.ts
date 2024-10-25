import { useState } from "react";
import { TopicsToStudyContent } from "../models/TopicsToStudyContent";
import { useNavigate } from "react-router-dom";

export default function useTopicsToStudyViewModel() {
  const [topicsToStudy] = useState(TopicsToStudyContent);
  const navigate = useNavigate();

  const goToTopic = (id: number) => {
    navigate(`/topic/${id}`);
  };

  return {
    topicsToStudy,
    goToTopic,
  };
}
