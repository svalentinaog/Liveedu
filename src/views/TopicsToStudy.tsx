import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TopicToStudyCard from "../components/TopicToStudyCard";
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
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        TopicsToStudy
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", md: "100%", sm: "100%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {topicsToStudy.map((topic, index) => (
          <TopicToStudyCard key={index} topic={topic} />
        ))}
      </Box>
    </Box>
  );
}
