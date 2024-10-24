import { useNavigate } from "react-router-dom";
import { IProfileContent, ProfileContent } from "../models/ProfileContent";
import {
  CurrentBalanceContent,
  ICurrentBalanceContent,
} from "../models/CurrentBalanceContent";

export const useItemViewModel = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const enhanceContentWithOnClick = (
    content: (IProfileContent | ICurrentBalanceContent)[]
  ) => {
    return content.map((item) => ({
      ...item,
      onClick: () => handleNavigation(item.path),
    }));
  };

  return {
    profileItems: enhanceContentWithOnClick(ProfileContent),
    currentBalanceItems: enhanceContentWithOnClick(CurrentBalanceContent),
  };
};
