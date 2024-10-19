interface ITopicToStudyCardProps {
  topic: {
    title: string;
    description: string;
    image: string;
  };
}

export default function TopicToStudyCard({ topic }: ITopicToStudyCardProps) {
  return (
    <div>
      <img src={topic.image} alt="img topic" />
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>
    </div>
  );
}
