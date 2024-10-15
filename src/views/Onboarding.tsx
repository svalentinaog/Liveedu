import { Grid } from "@mui/system";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OnboardingCard from "../components/OnboardingCard";
import PaginationPoints from "../components/PaginationPoints";
import useOnboardingViewModel from "../viewmodels/useOnboarding";
import { commonStyles, btnSubmit } from "../styles/mui";

export default function Onboarding() {
  const { currentScreen, screenContent, nextScreen, goToScreen, totalScreens } =
    useOnboardingViewModel();

  return (
    <Grid container spacing={2} sx={{ height: "100vh", boxSizing: "border-box" }}>
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
            width: "100%",
            bottom: 0,
            position: "fixed",
            padding: 2,
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
