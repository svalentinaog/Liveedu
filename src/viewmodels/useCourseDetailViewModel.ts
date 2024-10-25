import { useParams } from "react-router-dom";
import useCoursesViewModel from "./useCourses";

export default function useCourseDetailViewModel() {
  const { id } = useParams<{ id: string }>();
  const { courses } = useCoursesViewModel();

  const course = courses.find((course) => course.id === parseInt(id || "", 10));

  const topic = course?.topics?.[0];

  return {
    course,
    topic,
    courseNotFound: !course,
  };
}
