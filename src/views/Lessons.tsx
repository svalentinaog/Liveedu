import { Box } from "@mui/material";
import { ILesson } from "../models/CoursesContent";
import LessonCard from "../components/LessonCard";

interface ILessonsProps {
  lessons: ILesson[];
}

export default function Lessons({ lessons }: ILessonsProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </Box>
  );
}
