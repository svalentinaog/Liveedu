import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCoursesViewModel from "./useCourses";

export default function useTopicQuizzesViewModel() {
  const { courses } = useCoursesViewModel(); // Obtiene los cursos
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const navigate = useNavigate();

  // * Obtiene el Cuestionario específico por ID
  const getQuizById = (id: number) => {
    const currentCourse = courses[currentCourseIndex];
    const currentTopic = currentCourse?.topics[currentTopicIndex];

    if (!currentTopic) return null; // Manejo de tema no existente
    return currentTopic.quizzes.find((quiz) => quiz.id === id);
  };

  // * Maneja la Respuesta selección y verifica si es correcta
  const selectOption = (selectedOptionLabel: string) => {
    const currentCourse = courses[currentCourseIndex];
    const currentTopic = currentCourse?.topics[currentTopicIndex];
    const currentQuiz = currentTopic?.quizzes[currentQuizIndex];

    if (!currentQuiz) return;
    const currentQuestion = currentQuiz.question;

    if (!currentQuestion) return;

    setSelectedOption(selectedOptionLabel);

    if (selectedOptionLabel === currentQuiz.correctAnswer) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };

  // * Pasa al siguiente Cuestionario
  const nextQuiz = () => {
    const currentCourse = courses[currentCourseIndex];
    const currentTopic = currentCourse?.topics[currentTopicIndex];
    const currentQuiz = currentTopic?.quizzes[currentQuizIndex];

    if (!currentQuiz) return;

    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setResult(null);
    } else if (currentQuizIndex < currentTopic.quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setResult(null);
    } else if (currentTopicIndex < currentCourse.topics.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1);
      setCurrentQuizIndex(0);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setResult(null);
    } else if (currentCourseIndex < courses.length - 1) {
      setCurrentCourseIndex(currentCourseIndex + 1);
      setCurrentTopicIndex(0);
      setCurrentQuizIndex(0);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setResult(null);
    } else {
      navigate("/quiz-completed");
    }
  };

  return {
    courses,
    currentCourseIndex,
    currentTopicIndex,
    currentQuizIndex,
    currentQuestionIndex,
    selectedOption,
    result,
    nextQuiz,
    getQuizById,
    selectOption,
  };
}
