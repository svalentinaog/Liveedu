import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TopicCard from "./TopicCard.tsx";
import useTopicsViewModel from "../viewmodels/useTopics.ts";

export default function TopicQuizzes() {
  const { allTopics, goToQuiz } = useTopicsViewModel();

  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        gap: 2,
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: { xs: "16px", md: "24px" } }}
      >
        Topics quizzes
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {/* 📃 Cada Tema me direcciona a un Cuestionario por Tema */}
        {allTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} onClick={goToQuiz} />
        ))}
      </Box>
    </Box>
  );
}
