import { useState } from "react";
import { TransitionHistoryContent } from "../models/TransitionHistoryContent";

export default function useTransitionHistoryViewModel() {
  const [transition] = useState(TransitionHistoryContent);

  return {
    transition,
  };
}
