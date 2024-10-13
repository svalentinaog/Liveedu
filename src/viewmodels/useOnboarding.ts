import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OnboardingContent } from "../models/OnboardingContent";

export default function useOnboardingViewModel() {
  const [currentScreen, setCurrentScreen] = useState<number>(0);

  const totalScreens = OnboardingContent.length;

  const navigate = useNavigate();

  const nextScreen = () => {
    if (currentScreen < totalScreens - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigate("/sign-in");
    }
  };

  const goToScreen = (screenIndex: number) => {
    setCurrentScreen(screenIndex);
  };

  return {
    currentScreen,
    screenContent: OnboardingContent[currentScreen],
    nextScreen,
    goToScreen,
    totalScreens,
  };
}
