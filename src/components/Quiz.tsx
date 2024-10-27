import QuizCard from "./QuizCard";
import { QuizContainer } from "../styles/mui";

interface QuizProps {
  questionContent: {
    id: number;
    question: string;
    options: {
      a: string;
      b: string;
      c: string;
      d: string;
    };
    correctAnswer: "a" | "b" | "c" | "d";
  };
  onSelectOption: (optionLabel: string) => void;
}

export default function Quiz({ questionContent, onSelectOption }: QuizProps) {
  return (
    <QuizContainer>
      {Object.entries(questionContent.options).map(([label, text]) => (
        <QuizCard
          key={label}
          option={{
            label,
            text,
            correctAnswer: questionContent.correctAnswer,
          }}
          isSelected={false}
          result={null}
          onSelect={() => onSelectOption(label)}
        />
      ))}
    </QuizContainer>
  );
}
