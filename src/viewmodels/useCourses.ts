import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoursesContent } from "../models/CoursesContent";

export default function useCoursesViewModel() {
  const [courses] = useState(CoursesContent);
  const navigate = useNavigate();

  const goToCourseDetail = (id: number) => {
    navigate(`/course/${id}`);
  };

  const goToTopicDetail = (courseId: number, topicId: number) => {
    navigate(`/course/${courseId}/topic/${topicId}`);
  };

  return {
    courses,
    goToCourseDetail,
    goToTopicDetail,
  };
}
