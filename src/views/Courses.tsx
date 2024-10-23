import { Box } from "@mui/system";
import CourseCard from "../components/CourseCard";
import useCoursesViewModel from "../viewmodels/useCourses";

export default function Courses() {
  const { courses } = useCoursesViewModel();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
      }}
    >
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </Box>
  );
}
