import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TopicCard from "../components/TopicCard";
import useTopicQuizzesViewModel from "../viewmodels/useTopicQuizzes.ts";

export default function TopicQuizzes() {
  const { topicQuizzes } = useTopicQuizzesViewModel();

  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        gap: { xs: 1, md: 2 },
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
          gap: { xs: 1, md: 2 },
        }}
      >
        {topicQuizzes.map((topic, index) => (
          <TopicCard key={index} topic={topic} />
        ))}
      </Box>
    </Box>
  );
}
