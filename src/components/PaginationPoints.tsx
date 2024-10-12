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
    <div className="pagination-container">
      {Array.from({ length: totalPoints }).map((_, index) => (
        <div
          key={index}
          className={`pagination-point ${
            currentScreen === index ? "active" : ""
          }`}
          onClick={() => goToScreen(index)}
        ></div>
      ))}
    </div>
  );
}
