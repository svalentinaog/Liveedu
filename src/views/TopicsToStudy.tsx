import { Box } from "@mui/system";
import TopicCard from "../components/TopicCard";
import { ITopic } from "../models/CoursesContent";
import useCourseDetailViewModel from "../viewmodels/useCourseDetail";

interface ITopicsToStudyProps {
  topics: ITopic[];
  courseId?: number;
}

export default function TopicsToStudy({
  topics,
  courseId,
}: ITopicsToStudyProps) {
  const { goToLessonDetail } = useCourseDetailViewModel();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      {/* Renderizar esta tarjeta por cada tema dentro del curso, al dar clic ir a las lecciones de ese tema */}
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          onClick={() => {
            if (courseId) goToLessonDetail(courseId, topic.id);
          }}
        />
      ))}
    </Box>
  );
}
