import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OnboardingContents } from "../models/OnboardingContent";

export default function useOnboardingViewModel() {
  const [currentScreen, setCurrentScreen] = useState<number>(0);

  const totalScreens = OnboardingContents.length;

  const navigate = useNavigate();

  const nextScreen = () => {
    if (currentScreen < totalScreens - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigate("/sign-up");
    }
  };

  const goToScreen = (screenIndex: number) => {
    setCurrentScreen(screenIndex);
  };

  return {
    currentScreen,
    screenContent: OnboardingContents[currentScreen],
    nextScreen,
    goToScreen,
    totalScreens,
  };
}
