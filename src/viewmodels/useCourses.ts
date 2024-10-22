import { useState } from "react";
import { CoursesContent } from "../models/CoursesContent";

export default function useCoursesViewModel() {
  const [courses] = useState(CoursesContent);

  return {
    courses,
  };
}
