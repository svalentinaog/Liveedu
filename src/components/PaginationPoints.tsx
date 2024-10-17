import { Box } from "@mui/system";

interface PaginationPointsProps {
  totalPoints: number;
  currentScreen: number;
  goToScreen: (screenIndex: number) => void;
}

// Styles (Pendiente mover a mui.ts)
const stylesPagination = {
  paginationContainer: {
    display: "flex",
    gap: { xs: "10px", sm: "15px" },
  },
  paginationPoint: (isActive: boolean) => ({
    width: isActive ? { xs: "30px", sm: "50px" } : { xs: "10px", sm: "15px" },
    height: { xs: "10px", sm: "15px" },
    background: "linear-gradient(var(--lilac), var(--blue))",
    borderRadius: isActive
      ? { xs: "50px", sm: "50px" }
      : { xs: "50%", sm: "50%" },
    transition: "all 0.3s ease",
    cursor: "pointer",
  }),
};
// end Styles

export default function PaginationPoints({
  totalPoints,
  currentScreen,
  goToScreen,
}: PaginationPointsProps) {
  return (
    <Box sx={stylesPagination.paginationContainer}>
      {Array.from({ length: totalPoints }).map((_, index) => {
        const isActive = currentScreen === index;
        return (
          <Box
            key={index}
            sx={stylesPagination.paginationPoint(isActive)}
            onClick={() => goToScreen(index)}
          />
        );
      })}
    </Box>
  );
}
