import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistoryBack } from "../viewmodels/useHistoryBack";
import { BackButton } from "../styles/components/muiBackButton";
import { Box } from "@mui/system";

export default function HistoryBack() {
  const { goBack, viewName } = useHistoryBack();

  return (
    <BackButton onClick={goBack}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px",
          padding: 1,
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          },
        }}
      >
        <ArrowBackIcon />
      </Box>
      {viewName}
    </BackButton>
  );
}
