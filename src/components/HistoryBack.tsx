import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistoryBack } from "../viewmodels/useHistoryBack";
import { BackButton } from "../styles/components/muiBackButton";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";

export default function HistoryBack() {
  const { goBack } = useHistoryBack();

  return (
    <BackButton onClick={goBack}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "12px",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          backgroundColor: "transparent",
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="back">
          <ArrowBackIcon />
        </IconButton>
      </Box>
    </BackButton>
  );
}
