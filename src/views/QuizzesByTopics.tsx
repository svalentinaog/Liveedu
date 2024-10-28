import {
  QuizzesByTopicContainer,
  TitleQuizByTopic,
  TopicsContainer,
  TopicsListContainer,
} from "../styles/mui";
import { Box } from "@mui/system";
import Header from "../components/Header";
import TopicCard from "../components/TopicCard";
import useTopicsViewModel from "../viewmodels/useTopics";

export default function QuizzesByTopics() {
  const { topicsByCourse, goToQuiz } = useTopicsViewModel();

  return (
    <QuizzesByTopicContainer>
      <Header />
      {/* 📃 Temas con Cuestionarios para Resolver */}
      <TopicsContainer>
        {topicsByCourse.map((course) => (
          <Box key={course.courseId}>
            <TitleQuizByTopic>{course.courseTitle}</TitleQuizByTopic>
            <TopicsListContainer>
              {course.topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onClick={() => goToQuiz(course.courseId, topic.id)}
                />
              ))}
            </TopicsListContainer>
          </Box>
        ))}
      </TopicsContainer>
    </QuizzesByTopicContainer>
  );
}
