import { Box } from "@mui/system";
import CourseCard from "../components/CourseCard";
import useCoursesViewModel from "../viewmodels/useCourses";

export default function Courses() {
  const { courses, goToCourseDetail } = useCoursesViewModel();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
      }}
    >
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onClick={goToCourseDetail}
        />
      ))}
    </Box>
  );
}
