import { Typography } from "@mui/material";
import HistoryBack from "../components/HistoryBack";
import { Box } from "@mui/system";

export default function Support() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90vh", md: "100%" },
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <HistoryBack />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Typography
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Support
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
