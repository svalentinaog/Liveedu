import { Box } from "@mui/system";
import TopicsToStudy from "./TopicsToStudy";
import Header from "../components/Header";
import Courses from "./Courses";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingBottom: 8,
      }}
    >
      <Box
        sx={{ padding: { xs: "0", md: "0 20px 0 20px", sm: "0 20px 0 20px" } }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0 20px 0 20px",
        }}
      >
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
            Latest courses
          </Typography>
          <Courses />
        </Box>
        <TopicsToStudy />
      </Box>
    </Box>
  );
}
