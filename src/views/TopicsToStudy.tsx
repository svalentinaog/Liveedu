import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TopicCard from "../components/TopicCard";
import useTopicsToStudyViewModel from "../viewmodels/useTopicsToStudy";

export default function TopicsToStudy() {
  const { topicsToStudy } = useTopicsToStudyViewModel();

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
        Topics to study
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, md: 2 },
        }}
      >
        {topicsToStudy.map((topic, index) => (
          <TopicCard key={index} topic={topic} />
        ))}
      </Box>
    </Box>
  );
}
