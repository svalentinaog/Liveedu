import { Box } from "@mui/material";
import { ILesson } from "../models/CoursesContent";
import LessonCard from "../components/LessonCard";

interface ILessonsProps {
  lessons: ILesson[];
  onLessonSelect: (index: number) => void;
  playingLessonIndex: number; // Agregar esta línea
  isPlaying: boolean;
}

export default function Lessons({
  lessons,
  onLessonSelect,
  playingLessonIndex,
  isPlaying,
}: ILessonsProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      {lessons.map((lesson, index) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          isPlaying={playingLessonIndex === index && isPlaying}
          onClick={() => onLessonSelect(index)}
        />
      ))}
    </Box>
  );
}
