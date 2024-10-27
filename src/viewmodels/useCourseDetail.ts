import { useParams, useNavigate } from "react-router-dom";
import useCoursesViewModel from "./useCourses";

export default function useCourseDetailViewModel() {
  const { courseId, id } = useParams<{ courseId: string; id?: string }>(); // Cambiamos a courseId e id
  const { courses } = useCoursesViewModel();
  const navigate = useNavigate();

  const course = courses.find(
    (course) => course.id === parseInt(courseId || "", 10)
  );
  const topic = course?.topics?.find((t) => t.id === parseInt(id || "", 10)); // Encuentra el tema por id

  // Redirige a las lecciones del tema específico
  const goToLessonDetail = (courseId: number, topicId: number) => {
    navigate(`/course/${courseId}/topic/${topicId}`);
  };

  return {
    course,
    topic,
    courseNotFound: !course,
    goToLessonDetail,
  };
}
