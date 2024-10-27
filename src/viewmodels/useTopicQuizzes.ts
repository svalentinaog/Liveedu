import { useState } from "react";
import { TopicQuizzesContent } from "../models/TopicQuizzesContent";
import { useNavigate } from "react-router-dom";

export default function useTopicQuizzesViewModel() {
  const [topicQuizzes] = useState(TopicQuizzesContent);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const navigate = useNavigate();

  // Corrige aquí el uso de navigate
  const goToQuiz = (id: number) => navigate(`/quiz/${id}`);

  // Obtiene el quiz específico por ID
  const getQuizById = (id: number) =>
    topicQuizzes.find((quiz) => quiz.id === id);

  // Maneja la selección de una opción y verifica si es correcta
  const selectOption = (selectedOptionLabel: string) => {
    const currentQuiz = topicQuizzes[currentQuizIndex];
    const currentQuestion = currentQuiz?.questions[currentQuestionIndex];
    if (!currentQuestion) return;

    setSelectedOption(selectedOptionLabel);

    if (selectedOptionLabel === currentQuestion.correctAnswer) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };

  const nextQuiz = () => {
    const currentQuiz = topicQuizzes[currentQuizIndex];
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setResult(null);
    } else if (currentQuizIndex < topicQuizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setResult(null);
    } else {
      navigate("/quiz-completed");
    }
  };

  return {
    topicQuizzes,
    currentQuizIndex,
    currentQuestionIndex,
    selectedOption,
    result,
    nextQuiz,
    getQuizById,
    selectOption,
    goToQuiz,
  };
}
