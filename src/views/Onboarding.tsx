import { Grid } from "@mui/system";
import OnboardingCard from "../components/OnboardingCard";
import PaginationPoints from "../components/PaginationPoints";
import useOnboardingViewModel from "../viewmodels/useOnboarding";
import { Button } from "@mui/material";

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
      <Grid
        container
        spacing={6}
        sx={{ ...commonStyles, height: "100%", width: "100%" }}
      >
        <Grid
          size={{ sm: 12, xs: 12 }}
          sx={{
            alignItems: "center",
          }}
        >
          <OnboardingCard key={currentScreen} screen={screenContent} />
        </Grid>

        <Grid
          size={{ sm: 12, xs: 12 }}
          sx={{
            ...commonStyles,
            alignItems: { xs: "start", sm: "center" },
            gap: 2,
          }}
        >
          <PaginationPoints
            totalPoints={totalScreens}
            currentScreen={currentScreen}
            goToScreen={goToScreen}
          />

          <Button
            onClick={nextScreen}
            size="large"
            sx={{ ...btnSubmit, width: "100%" }}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
