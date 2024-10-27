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
import { ITopicQuizzesContent } from "../models/TopicQuizzesContent";
import HistoryBack from "../components/HistoryBack";
import Quiz from "../components/Quiz";
import useTopicQuizzesViewModel from "../viewmodels/useTopicQuizzes";

export default function QuizDetail() {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [quiz, setQuiz] = useState<ITopicQuizzesContent | null>(null);
  const { getQuizById, currentQuestionIndex, nextQuiz, selectOption } =
    useTopicQuizzesViewModel();

  useEffect(() => {
    if (id) {
      const quizData = getQuizById(Number(id));
      setQuiz(quizData || null);
    }
  }, [id, getQuizById]);

  if (!quiz) return <Typography>Loading quiz...</Typography>;

  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <HistoryBack />
          </Box>
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
              {quiz.questions.length > 0
                ? quiz.questions[currentQuestionIndex].question
                : "Loading..."}
            </Typography>
          </Box>
        </Box>

        <Quiz questionContent={currentQuestion} onSelectOption={selectOption} />
      </Box>
      <MainButton sx={btnNextMobileNone} variant="contained" onClick={nextQuiz}>
        Next
      </MainButton>
      <NextButton
        size="large"
        variant="text"
        endIcon={<ArrowForwardIcon />}
        onClick={nextQuiz}
      >
        Next
      </NextButton>
    </Box>
  );
}
