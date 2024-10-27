import { Box } from "@mui/system";
import PageHeader from "../components/PageHeader";
import { Typography } from "@mui/material";
import {
  btnNextMobileNone,
  ContainerStarsImage,
  MainButton,
  NextButton,
  StarsImage,
} from "../styles/mui";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function QuizCompleted() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        height: { xs: "90vh", md: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      <PageHeader title="Quiz completed" />

      <Box
        sx={{
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
            gap: 3,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{ fontSize: { xs: "24px", md: "40px" }, fontWeight: "bold" }}
            >
              Congratulations
            </Typography>
            <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
              You have completed the test
            </Typography>
          </Box>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" } }}>
            14 correct answers
          </Typography>
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
      {/* Next mobile */}
      <MainButton sx={btnNextMobileNone} variant="contained">
        Save
      </MainButton>

      {/* Next Desktop */}
      <NextButton size="large" variant="text" endIcon={<ArrowForwardIcon />}>
        Save
      </NextButton>
    </Box>
  );
}
