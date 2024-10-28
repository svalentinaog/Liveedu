import { Box } from "@mui/system";
import {
  ContainerTopicCard,
  DescriptionTopicCard,
  DurationTopicCard,
  SubContainerTopicCard,
  TitleTopicCard,
} from "../styles/mui";

interface ITopicCardProps {
  topic: {
    id: number;
    image: string;
    title: string;
    description: string;
    duration: number;
  };
  onClick: () => void;
}

export default function TopicCard({ topic, onClick }: ITopicCardProps) {
  return (
    <ContainerTopicCard onClick={onClick} style={{ cursor: "pointer" }}>
      <SubContainerTopicCard>
        <img src={topic.image} alt="Topic Card" />
        <Box>
          <TitleTopicCard>{topic.title}</TitleTopicCard>
          <DescriptionTopicCard>{topic.description}</DescriptionTopicCard>
        </Box>
      </SubContainerTopicCard>
      <DurationTopicCard>{topic.duration}min</DurationTopicCard>
    </ContainerTopicCard>
  );
}
