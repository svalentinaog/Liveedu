import { useState } from "react";
import { TopicQuizzesContent } from "../models/TopicQuizzesContent";
import { useNavigate } from "react-router-dom";

export default function useTopicQuizzesViewModel() {
  const [topicQuizzes] = useState(TopicQuizzesContent);
  const navigate = useNavigate();

  const goToQuiz = (id: number) => {
    navigate(`/quiz/${id}`);
  };

  return {
    topicQuizzes,
    goToQuiz,
  };
}
