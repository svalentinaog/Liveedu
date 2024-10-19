import { PaginationPointContainer, PaginationPoint } from "../styles/mui";

interface PaginationPointsProps {
  totalPoints: number;
  currentScreen: number;
  goToScreen: (screenIndex: number) => void;
}

export default function PaginationPoints({
  totalPoints,
  currentScreen,
  goToScreen,
}: PaginationPointsProps) {
  return (
    <PaginationPointContainer>
      {Array.from({ length: totalPoints }).map((_, index) => {
        const isActive = currentScreen === index;
        return (
          <PaginationPoint
            key={index}
            isActive={isActive}
            onClick={() => goToScreen(index)}
          />
        );
      })}
    </PaginationPointContainer>
  );
}
