import { useState } from "react";
import { TopicsToStudyContent } from "../models/TopicsToStudyContent";

export default function useTopicsToStudyViewModel() {
  const [topicsToStudy] = useState(TopicsToStudyContent);

  return {
    topicsToStudy,
  };
}
