import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OnboardingCard from "../components/OnboardingCard";
import PaginationPoints from "../components/PaginationPoints";
import useOnboardingViewModel from "../viewmodels/useOnboarding";
import {
  MainButton,
  NextButton,
  OnboardingContainer,
  OnboardingContent,
  OnboardingScreen,
  PaginationContainer,
  btnNextMobileNone,
} from "../styles/mui";

export default function Onboarding() {
  const { currentScreen, screenContent, nextScreen, goToScreen, totalScreens } =
    useOnboardingViewModel();

  return (
    <OnboardingContainer>
      <OnboardingContent>
        {/* Screens */}
        <OnboardingScreen size={{ sm: 12, xs: 12 }}>
          <OnboardingCard key={currentScreen} screen={screenContent} />
        </OnboardingScreen>

        {/* Paginations */}
        <PaginationContainer size={{ sm: 12, xs: 12 }}>
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
          <NextButton
            onClick={nextScreen}
            size="large"
            variant="text"
            endIcon={<ArrowForwardIcon />}
          >
            Next
          </NextButton>
        </PaginationContainer>
      </OnboardingContent>
    </OnboardingContainer>
  );
}
