import { Box } from "@mui/system";
import Header from "../components/Header";
import TopicQuizzes from "./TopicQuizzes";

export default function Quizzes() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: { xs: "0", md: "0 20px 0 20px", sm: "0 20px 0 20px" },
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: { xs: "20px", md: 0 },
        }}
      >
        <TopicQuizzes />
      </Box>
    </Box>
  );
}
