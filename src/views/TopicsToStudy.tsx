import { Box } from "@mui/system";
import TopicCard from "../components/TopicCard";
import useCoursesViewModel from "../viewmodels/useCourses";
import { ITopic } from "../models/CoursesContent";

interface ITopicsToStudyProps {
  topics: ITopic[];
}

export default function TopicsToStudy({ topics }: ITopicsToStudyProps) {
  const { goToTopicDetail } = useCoursesViewModel();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          onClick={() => goToTopicDetail(topic.id, topic.id)}
        />
      ))}
    </Box>
  );
}
