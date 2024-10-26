import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HistoryBackContainer, HistoryBackContent } from "../styles/mui";
import { useHistoryBack } from "../viewmodels/useHistoryBack";

export default function HistoryBack() {
  const { goBack } = useHistoryBack();

  return (
    <HistoryBackContainer onClick={goBack}>
      <HistoryBackContent>
        <IconButton edge="start" color="inherit" aria-label="back">
          <ArrowBackIcon />
        </IconButton>
      </HistoryBackContent>
    </HistoryBackContainer>
  );
}
