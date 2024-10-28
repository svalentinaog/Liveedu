import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { updateCoursesStateByKey } from "../models/slices/CoursesSlice";
import { CoursesContent } from "../models/CoursesContent";

export default function useCoursesViewModel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Seleccionamos los cursos desde el estado global 🐸🤘
  const courses = useSelector((state: RootState) => state.courses.courses);

  // Inicializa los cursos si el estado está vacío
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(
        updateCoursesStateByKey({ key: "courses", value: CoursesContent })
      );
    }
  }, [courses, dispatch]);

  // Fn para Ir al detalle del curso 📌
  const goToCourseDetail = (id: number) => {
    navigate(`/course/${id}`);
  };

  return {
    courses,
    goToCourseDetail,
  };
}
