import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TopicCard from "./TopicCard.tsx";
import useTopicQuizzesViewModel from "../viewmodels/useTopicQuizzes.ts";

export default function TopicQuizzes() {
  const { topicQuizzes, goToQuiz } = useTopicQuizzesViewModel();

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
        {topicQuizzes.map((topic) => (
          <TopicCard key={topic.id} topic={topic} onClick={goToQuiz} />
        ))}
      </Box>
    </Box>
  );
}
