import { Typography } from "@mui/material";
import {
  IconContainer,
  PersonalInfoCardContainer,
  ItemContent,
} from "../styles/mui";

interface QuizCardProps {
  option: {
    label: string;
    text: string;
    correctAnswer: string;
  };
}

export default function QuizCard({ option }: QuizCardProps) {
  return (
    <PersonalInfoCardContainer>
      <ItemContent>
        <IconContainer>
          <Typography sx={{ textTransform: "uppercase" }}>
            {option.label}
          </Typography>
        </IconContainer>
        <Typography>{option.text}</Typography>
      </ItemContent>
    </PersonalInfoCardContainer>
  );
}
