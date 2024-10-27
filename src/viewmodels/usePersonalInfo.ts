import { useState } from "react";
import { PersonalInfoContent } from "../models/PersonalInfoContent";

export default function usePersonalInfoViewModel() {
  const [personalInfo] = useState(PersonalInfoContent);

  return {
    personalInfo,
  };
}
