import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoursesContent } from "../models/CoursesContent";

export default function useCoursesViewModel() {
  const [courses] = useState(CoursesContent); // Inicializa los cursos desde CoursesContent
  const navigate = useNavigate();

  // Navega al detalle de un curso
  const goToCourseDetail = (id: number) => {
    navigate(`/course/${id}`);
  };

  return {
    courses,
    goToCourseDetail,
  };
}
