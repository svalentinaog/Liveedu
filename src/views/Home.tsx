import { Box } from "@mui/system";
import Courses from "./Courses";
import TopicsToStudy from "./TopicsToStudy";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: { xs: "0", md: "0 20px 0 20px", sm: "0 20px 0 20px" },
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: { xs: "20px" },
        }}
      >
        <Courses />
        <TopicsToStudy />
      </Box>
    </Box>
  );
}
