import OnboardingCard from "../components/OnboardingCard";
import PaginationPoints from "../components/PaginationPoints";
import useOnboardingViewModel from "../viewmodels/useOnboarding";

export default function Onboarding() {
  const { currentScreen, screenContent, nextScreen, goToScreen, totalScreens } =
    useOnboardingViewModel();

  return (
    <div>
      <OnboardingCard key={currentScreen} screen={screenContent} />

      <PaginationPoints
        totalPoints={totalScreens}
        currentScreen={currentScreen}
        goToScreen={goToScreen}
      />

      <button onClick={nextScreen}>Next</button>
    </div>
  );
}
