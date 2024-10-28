import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  IconButton,
  Typography,
  Card,
  Box,
  LinearProgress,
} from "@mui/material";
import { btnNextMobileNone, MainButton, NextButton } from "../styles/mui";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quiz from "../components/Quiz";
import PageHeader from "../components/PageHeader";
import useTopicsViewModel from "../viewmodels/useTopics";
import useTopicQuizzesViewModel from "../viewmodels/useTopicQuizzes";
import { IQuiz, ITopic } from "../models/CoursesContent";

export default function QuizDetail() {
  const { id, courseId } = useParams<{ id: string; courseId: string }>();

  const [isPlaying, setIsPlaying] = useState(false);
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentTopic, setCurrentTopic] = useState<ITopic | null>(null);

  const { allTopics } = useTopicsViewModel();
  const { selectOption } = useTopicQuizzesViewModel();

  useEffect(() => {
    const findQuiz = () => {
      console.log("ID del quiz:", id);
      console.log("ID del curso:", courseId);
      console.log("Temas disponibles:", allTopics);

      if (id && courseId) {
        const quizData = allTopics
          .filter((topic) => topic.id === Number(courseId))
          .flatMap((topic) => topic.quizzes)
          .find((quiz) => quiz.id === Number(id));

        if (quizData) {
          setQuiz(quizData);
          setCurrentTopic(
            allTopics.find((topic) => topic.id === Number(courseId)) || null
          );
          setCurrentQuestionIndex(0);
        } else {
          console.log("Quiz no encontrado");
        }
      }
    };

    findQuiz();
  }, [id, courseId, allTopics]);

  // Manejar el caso en el que no se ha cargado el cuestionario o el tema
  if (!quiz || !currentTopic) {
    return <Typography>Loading quiz...</Typography>;
  }

  const optionsCount = Object.keys(quiz.options).length;
  const progress = ((currentQuestionIndex + 1) / optionsCount) * 100;

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNextQuiz = () => {
    if (currentTopic) {
      const nextQuizIndex =
        currentTopic.quizzes.findIndex((q) => q.id === quiz.id) + 1;
      if (nextQuizIndex < currentTopic.quizzes.length) {
        const nextQuiz = currentTopic.quizzes[nextQuizIndex];
        setQuiz(nextQuiz);
        setCurrentQuestionIndex(0); // Reinicia el índice de pregunta
      } else {
        console.log("Fin del cuestionario");
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90vh", md: "100%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 15,
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <PageHeader title={quiz.question} other="cantidad de cuestionarios" />
          <Card
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: "20px",
              background: "var(--white-app)",
              border: "none",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", md: "500px" },
                background: "var(--lilac)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="Quiz Watch"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <IconButton
              onClick={handleTogglePlay}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "var(--dark-gray)",
                background: "var(--gradient)",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Card>
          <LinearProgress variant="determinate" value={progress} />

          <Box>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { xs: "18px", md: "24px" },
              }}
            >
              {quiz ? quiz.question : "Loading..."}
            </Typography>
          </Box>
        </Box>

        <Quiz questionContent={quiz} onSelectOption={selectOption} />
      </Box>
      <MainButton
        sx={btnNextMobileNone}
        variant="contained"
        onClick={handleNextQuiz}
      >
        Next
      </MainButton>
      <NextButton
        size="large"
        variant="text"
        endIcon={<ArrowForwardIcon />}
        onClick={handleNextQuiz}
      >
        Next
      </NextButton>
    </Box>
  );
}
