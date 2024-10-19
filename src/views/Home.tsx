import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Courses from "./Courses";
import TopicsToStudy from "./TopicsToStudy";

export default function Home() {
  return (
    <div>
      <Box>
        <Typography variant="h1">Home</Typography>
      </Box>
      <Courses />
      <TopicsToStudy />
    </div>
  );
}
