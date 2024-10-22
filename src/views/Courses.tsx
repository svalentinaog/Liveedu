import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";
import useCoursesViewModel from "../viewmodels/useCourses";

export default function Courses() {
  const { courses } = useCoursesViewModel();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Courses
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", md: "100%", sm: "100%" },
          display: { xs: "column", md: "column", sm: "flex" },
          gap: 4,
          overflowX: "scroll",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </Box>
    </Box>
  );
}
