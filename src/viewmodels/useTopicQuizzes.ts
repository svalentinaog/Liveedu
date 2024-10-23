import { useState } from "react";
import { TopicQuizzesContent } from "../models/TopicQuizzesContent";

export default function useTopicQuizzesViewModel() {
  const [topicQuizzes] = useState(TopicQuizzesContent);

  return {
    topicQuizzes,
  };
}
