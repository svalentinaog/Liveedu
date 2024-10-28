import { ICoursesContent } from "../CoursesContent";

// Definicion de la interfaz para el estado de los cursos
export interface ICoursesState {
  courses: ICoursesContent[];
}

// Definicion de un tipo para las claves del estado
export type CoursesStateKeys = keyof ICoursesState;

// Definicion de el tipo para la actualización del estado
export type CoursesStateUpdate = { key: "courses"; value: ICoursesContent[] };

// Estado inicial de los cursos
const CoursesState: ICoursesState = {
  courses: [], // Estado inicial
};

export default CoursesState;
