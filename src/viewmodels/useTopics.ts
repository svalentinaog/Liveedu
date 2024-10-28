import { useNavigate } from "react-router-dom";
import useCoursesViewModel from "./useCourses";

export default function useTopicsViewModel() {
  const { courses } = useCoursesViewModel(); // Traer todos los cursos
  const navigate = useNavigate();

  // Obtener todos los temas de todos los cursos
  const allTopics = courses
    .map((course) => course.topics || [])
    .reduce((acc, val) => acc.concat(val), []);

  // Navegar al cuestionario del tema seleccionado
  // const goToQuiz = (topicId: number) => navigate(`/quiz/${topicId}`);

  // Navega al cuestionario del tema seleccionado
  const goToQuiz = (topicId: number) => {
    const topic = allTopics.find((topic) => topic.id === topicId);
    if (topic) {
      // Ahora buscamos el primer cuestionario del tema
      const quizId = topic.quizzes[0]?.id; // Ajusta esto según cómo desees manejar la selección
      navigate(`/quiz/${quizId}`);
    }
  };

  return {
    allTopics,
    goToQuiz,
  };
}
