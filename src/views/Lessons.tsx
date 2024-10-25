import { Box } from "@mui/material";
import { ILesson } from "../models/CoursesContent";
import LessonCard from "../components/LessonCard";
import { useState } from "react";

interface ILessonsProps {
  lessons: ILesson[];
}

export default function Lessons({ lessons }: ILessonsProps) {
  const [playingLessonId, setPlayingLessonId] = useState<number | null>(null);

  const handleLessonClick = (id: number) => {
    setPlayingLessonId((prev) => (prev === id ? null : id));
  };

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
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          isPlaying={playingLessonId === lesson.id}
          onClick={handleLessonClick}
        />
      ))}
    </Box>
  );
}
