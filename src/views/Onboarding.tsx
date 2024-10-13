import { Grid } from "@mui/system";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OnboardingCard from "../components/OnboardingCard";
import PaginationPoints from "../components/PaginationPoints";
import useOnboardingViewModel from "../viewmodels/useOnboarding";

export default function Onboarding() {
  const { currentScreen, screenContent, nextScreen, goToScreen, totalScreens } =
    useOnboardingViewModel();

  // Styles
  const commonStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const btnSubmit = {
    background: "linear-gradient(#bfc3fc, #a2c3fc)",
    textTransform: "capitalize",
    borderRadius: "16px",
    boxShadow: "none",
    padding: 1.75,
  };
  // end

  return (
    <Grid container spacing={2} sx={{ height: "100vh", padding: 2 }}>
      <Grid sx={{ ...commonStyles, height: "100%", width: "100%", gap: 4 }}>
        {/* Screens */}
        <Grid
          size={{ sm: 12, xs: 12 }}
          sx={{
            alignItems: "center",
          }}
        >
          <OnboardingCard key={currentScreen} screen={screenContent} />
        </Grid>

        {/* Paginations */}
        <Grid
          size={{ sm: 12, xs: 12 }}
          sx={{
            ...commonStyles,
            alignItems: { xs: "start", sm: "center" },
            gap: 4,
            width: "auto",
            bottom: 0,
          }}
        >
          {/* Points */}
          <PaginationPoints
            totalPoints={totalScreens}
            currentScreen={currentScreen}
            goToScreen={goToScreen}
          />

          {/* Next mobile */}
          <Button
            onClick={nextScreen}
            size="large"
            sx={{
              ...btnSubmit,
              width: "100%",
              display: { sm: "none", xs: "block" },
            }}
            variant="contained"
          >
            Next
          </Button>

          {/* Next Desktop */}
          <Button
            onClick={nextScreen}
            size="large"
            sx={{
              width: "7%",
              borderRadius: 2,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              textTransform: "capitalize",
              color: "#bfc3fc",
            }}
            variant="text"
            endIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
