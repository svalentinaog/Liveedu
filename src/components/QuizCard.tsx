import { Typography } from "@mui/material";
import {
  IconContainer,
  PersonalInfoCardContainer,
  ItemContent,
} from "../styles/mui";

interface Option {
  label: string; // letra "A", "B", "C", etc...
  text: string; // texto de la opción
  correctAnswer?: string;
}

interface QuizCardProps {
  option: Option;
  isSelected: boolean; // Indica si la opción está seleccionada
  result: string | null; // Resultado de la verificación
  onSelect: () => void; // Manejador de selección
}

export default function QuizCard({
  option,
  isSelected,
  result,
  onSelect,
}: QuizCardProps) {
  const getIconContainerBackgroundColor = () => {
    if (result === "correct" && isSelected) {
      return "var(--success)"; // Fondo verde si es correcta
    }
    if (result === "incorrect" && isSelected) {
      return "var(--danger)"; // Fondo rojo si es incorrecta
    }
    if (result === "incorrect" && option.label === option.correctAnswer) {
      return "var(--success)";
    }

    return isSelected ? "var(--gradient)" : "var(--translucent-lilac)";
  };

  return (
    <PersonalInfoCardContainer onClick={onSelect}>
      <ItemContent>
        <IconContainer sx={{ background: getIconContainerBackgroundColor() }}>
          <Typography sx={{ textTransform: "uppercase" }}>
            {option.label}
          </Typography>
        </IconContainer>
        <Typography>{option.text}</Typography>
      </ItemContent>
    </PersonalInfoCardContainer>
  );
}
