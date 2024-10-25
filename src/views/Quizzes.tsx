import { Box } from "@mui/system";
import Header from "../components/Header";
import TopicQuizzes from "../components/TopicQuizzes";

export default function Quizzes() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: 6 },
        padding: {
          xs: "0",
          md: "0 20px 0 20px",
          sm: "0 20px 0 20px",
        },
        marginBottom: { xs: 8, md: 4 },
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: { xs: "0 20px 0 20px", md: 0 },
        }}
      >
        <TopicQuizzes />
      </Box>
    </Box>
  );
}
