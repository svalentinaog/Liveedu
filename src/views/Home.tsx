import { Box } from "@mui/system";
import TopicsToStudy from "./TopicsToStudy";
import Header from "../components/Header";
import Courses from "./Courses";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
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
          gap: 6,
          padding: { xs: "20px" },
        }}
      >
        <Courses />
        <TopicsToStudy />
      </Box>
    </Box>
  );
}
