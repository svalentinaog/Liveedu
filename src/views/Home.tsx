import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import Courses from "./Courses";
import TopicsToStudy from "./TopicsToStudy";

export default function Home() {
  return (
    <Layout>
      <Box>
        <Typography variant="h1">Home</Typography>
      </Box>
      <Courses />
      <TopicsToStudy />
    </Layout>
  );
}
