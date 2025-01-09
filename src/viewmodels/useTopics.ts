import { useNavigate } from "react-router-dom";
import useCoursesViewModel from "./useCourses";

export default function useTopicsViewModel() {
  const { courses } = useCoursesViewModel(); // Traer todos los cursos
  const navigate = useNavigate();

  // * Obtener temas organizados por curso
  const topicsByCourse = courses.map((course) => ({
    courseId: course.id,
    courseTitle: course.title,
    topics: course.topics || [],
  }));

  // * Navega al cuestionario del tema seleccionado
  const goToQuiz = (courseId: number, topicId: number) => {
    navigate(`/courses/${courseId}/topics/${topicId}/quiz`);
  };

  return {
    topicsByCourse, // Lista de temas por curso
    goToQuiz,
  };
}
