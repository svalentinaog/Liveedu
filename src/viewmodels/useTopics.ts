import { useNavigate } from "react-router-dom";
import useCoursesViewModel from "./useCourses";

export default function useTopicsViewModel() {
  const { courses } = useCoursesViewModel(); // Traer todos los cursos
  const navigate = useNavigate();

  // * Obtener todos los temas de todos los cursos
  const allTopics = courses
    .map((course) => course.topics || [])
    .reduce((acc, val) => acc.concat(val), []);

  // Navegar al cuestionario del tema seleccionado
  // const goToQuiz = (topicId: number) => navigate(`/quiz/${topicId}`);

  // * Navega al cuestionario del tema seleccionado
  const goToQuiz = (topicId: number) => {
    const topic = allTopics.find((topic) => topic.id === topicId);

    if (topic && topic.quizzes && topic.quizzes.length > 0) {
      const quizId = topic.quizzes[0].id; // Primer quiz del tema
      navigate(`/topic/${topicId}/quiz/${quizId}`); // Redirige a la URL con ambos IDs
    }
  };

  return {
    allTopics,
    goToQuiz,
  };
}
