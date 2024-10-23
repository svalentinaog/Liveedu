import * as React from "react";
import { BarChart } from "@mui/x-charts";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Courses from "./Courses";

interface ChartData {
  day: string;
  value: number;
}

interface ChartProps {
  data: ChartData[];
  title: string;
}

const Chart: React.FC<ChartProps> = ({ data, title }) => {
  const seriesData = [{ data: data.map((item) => item.value) }];

  return (
    <Box sx={{ width: "100%", height: 300, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <BarChart
        series={seriesData}
        height={290}
        xAxis={[{ data: data.map((item) => item.day), scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </Box>
  );
};

const timeSpentData: ChartData[] = [
  { day: "02", value: 10 },
  { day: "03", value: 15 },
  { day: "04", value: 13 },
  { day: "05", value: 17 },
  { day: "06", value: 9 },
  { day: "07", value: 3 },
  { day: "08", value: 15 },
  { day: "09", value: 6 },
  { day: "10", value: 10 },
  { day: "11", value: 10 },
  { day: "12", value: 9 },
  { day: "13", value: 8 },
  { day: "14", value: 9 },
  { day: "15", value: 11 },
  { day: "16", value: 13 },
];

const passedTestsData: ChartData[] = [
  { day: "02", value: 2 },
  { day: "03", value: 0 },
  { day: "04", value: 5 },
  { day: "05", value: 2 },
  { day: "06", value: 4 },
  { day: "07", value: 2 },
  { day: "08", value: 6 },
  { day: "09", value: 2 },
  { day: "10", value: 4 },
  { day: "11", value: 4 },
  { day: "12", value: 2 },
  { day: "13", value: 2 },
  { day: "14", value: 1 },
  { day: "15", value: 2 },
  { day: "16", value: 4 },
];

export default function Statistics() {
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
        <Box sx={{ p: 3, bgcolor: "background.paper" }}>
          <Chart data={timeSpentData} title="Time spent in the app" />
          <Chart data={passedTestsData} title="Passed tests" />
        </Box>
      </Box>

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
    </Box>
  );
}
