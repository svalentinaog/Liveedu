import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import HistoryBack from "../components/HistoryBack";
import TransitionCard from "../components/TransitionCard";
import useTransitionHistoryViewModel from "../viewmodels/useTransitionHistory";

export default function TransitionHistory() {
  const { transition } = useTransitionHistoryViewModel();

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
            Transition
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {transition.map((transition) => (
              <TransitionCard key={transition.id} transition={transition} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
