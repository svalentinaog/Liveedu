import { Box } from "@mui/system";
import TransitionCard from "../components/TransitionCard";
import useTransitionHistoryViewModel from "../viewmodels/useTransitionHistory";
import PageHeader from "../components/PageHeader";

export default function TransitionHistory() {
  const { transition } = useTransitionHistoryViewModel();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "start",
        gap: 2,
      }}
    >
      <PageHeader title="Transition History" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Transaciones */}
        {transition.map((transition) => (
          <TransitionCard key={transition.id} transition={transition} />
        ))}
      </Box>
    </Box>
  );
}
