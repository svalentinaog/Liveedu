import { LinearProgress } from "@mui/material";
import {
  btnNextMobileNone,
  MainButton,
  NextButton,
  QuestionContainer,
  QuestionText,
  QuizContentContainer,
  QuizDetailContainer,
  QuizDetailCard,
  ImageContainer,
  QuizContainer,
} from "../styles/mui";

import PageHeader from "../components/PageHeader";
import QuizCard from "../components/QuizCard";
import { useParams } from "react-router-dom";
import useTopicsViewModel from "../viewmodels/useTopics";

export default function QuizDetail() {
  const { topicsByCourse } = useTopicsViewModel();

  const { courseId: courseIdParam, topicId: topicIdParam } = useParams<{
    courseId: string;
    topicId: string;
  }>();
  const courseId = parseInt(courseIdParam || "0", 10);
  const topicId = parseInt(topicIdParam || "0", 10);

  // Encuentra el curso y el tema específico
  const topic = topicsByCourse
    .find((course) => course.courseId === courseId)
    ?.topics.find((t) => t.id === topicId);

  const progressValue = 100 * (1 / (topic?.quizzes.length || 1));

  return (
    <QuizDetailContainer>
      <QuizContentContainer>
        <QuestionContainer>
          <PageHeader
            title="Quiz del Tema"
            other={`1/${topic?.quizzes.length || 0}`}
          />
          <QuizDetailCard>
            <ImageContainer>
              <img
                alt="Quiz"
                src="https://confines.net/wp-content/uploads/2018/11/cuestionario.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </ImageContainer>
          </QuizDetailCard>

          <LinearProgress variant="determinate" value={progressValue} />

          {topic?.quizzes.map((quiz) => (
            <div key={quiz.id}>
              <QuestionText>{quiz.question}</QuestionText>
              <QuizContainer>
                {Object.entries(quiz.options).map(([label, text]) => (
                  <QuizCard
                    key={label}
                    option={{
                      label,
                      text,
                      correctAnswer: quiz.correctAnswer,
                    }}
                  />
                ))}
              </QuizContainer>
            </div>
          ))}
        </QuestionContainer>
      </QuizContentContainer>

      <MainButton
        sx={btnNextMobileNone}
        variant="contained"
        onClick={() => console.log("Next Quiz")}
      >
        Next
      </MainButton>
      <NextButton
        size="large"
        variant="text"
        onClick={() => console.log("Next Quiz")}
      >
        Next
      </NextButton>
    </QuizDetailContainer>
  );
}
