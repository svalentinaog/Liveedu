import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { updateCoursesStateByKey } from "../models/slices/CoursesSlice";
import { url_courses } from "../models/routes/router";
import { getCourses } from "../models/services/courses/getCourses";

export default function useCoursesViewModel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // * Seleccionamos los cursos desde el estado global 🐸🤘
  const courses = useSelector((state: RootState) => state.courses.courses);

  // * Inicializa los cursos si el estado está vacío
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses(url_courses); // * Llama a la API
      if (data) {
        dispatch(
          updateCoursesStateByKey({ key: "courses", value: data }) // * Actualiza el estado con los datos recibidos
        );
      }
    };

    if (courses.length === 0) {
      fetchCourses(); // * Llama a la función para obtener los cursos
    }
  }, [courses, dispatch]);

  // * Fn para Ir al detalle del curso 📌
  const goToCourseDetail = (id: number) => {
    navigate(`/courses/${id}`);
  };

  return {
    courses,
    goToCourseDetail,
  };
}
