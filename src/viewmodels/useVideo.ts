import { useState, useEffect } from "react";
import { ILesson } from "../models/CoursesContent";

export default function useVideo(lessons: ILesson[], initialIndex: number) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(initialIndex);

  useEffect(() => {
    if (lessons.length > 0) {
      setVideoUrl(lessons[selectedLessonIndex].video);
    }
  }, [lessons, selectedLessonIndex]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleLessonSelect = (index: number) => {
    setSelectedLessonIndex(index);
    setIsPlaying(true);
  };

  return {
    isPlaying,
    videoUrl,
    handleTogglePlay,
    handleLessonSelect,
    selectedLessonIndex,
  };
}
