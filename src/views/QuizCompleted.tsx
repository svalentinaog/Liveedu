import { Box } from "@mui/system";
import PageHeader from "../components/PageHeader";
import { Typography } from "@mui/material";
import { ContainerStarsImage, StarsImage } from "../styles/mui";

export default function QuizCompleted() {
  return (
    <Box sx={{ padding: "20px" }}>
      <PageHeader title="Quiz completed" />

      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <ContainerStarsImage>
          <StarsImage src="svg/Stars.svg" alt="Stars Image" />
        </ContainerStarsImage>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <Typography variant="h3" fontWeight={"bold"}>
            Congratulations
          </Typography>
          <Typography variant="h5">You have completed the test</Typography>
        </Box>
        <Typography variant="body1">14 correct answers</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <img src="svg/coins.svg" alt="" />
          <Typography>14</Typography>
        </Box>
      </Box>
    </Box>
  );
}
