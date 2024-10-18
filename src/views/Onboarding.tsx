import { Grid } from "@mui/system";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OnboardingCard from "../components/OnboardingCard";
import PaginationPoints from "../components/PaginationPoints";
import useOnboardingViewModel from "../viewmodels/useOnboarding";
import { MainButton, btnNextMobileNone } from "../styles/mui";

export default function Onboarding() {
  const { currentScreen, screenContent, nextScreen, goToScreen, totalScreens } =
    useOnboardingViewModel();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: { xs: "90vh", md: "100vh", sm: "100vh" },
        boxSizing: "border-box",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "space-between", md: "center", sm: "center" },
          alignItems: "center",
          width: "100%",
          minHeight: { xs: "90vh", md: "100vh", sm: "100vh" },
          gap: { xs: 4, md: 6, sm: 6 },
        }}
      >
        {/* Screens */}
        <Grid
          size={{ sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-end", md: "center", sm: "center" },
            alignItems: "center",
            height: { xs: "100%", md: "100%", sm: "100%" },
          }}
        >
          <OnboardingCard key={currentScreen} screen={screenContent} />
        </Grid>

        {/* Paginations */}
        <Grid
          size={{ sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: { xs: "auto", md: "auto", sm: "auto" },
            gap: 4,
            padding: `0 16px 16px 16px`,
            alignItems: { xs: "start", sm: "center" },
          }}
        >
          {/* Points */}
          <PaginationPoints
            totalPoints={totalScreens}
            currentScreen={currentScreen}
            goToScreen={goToScreen}
          />

          {/* Next mobile */}
          <MainButton
            onClick={nextScreen}
            sx={btnNextMobileNone}
            variant="contained"
          >
            Next
          </MainButton>

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
              color: "var(--lilac)",
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
