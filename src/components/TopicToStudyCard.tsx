import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface ITopicToStudyCardProps {
  topic: {
    image: string;
    title: string;
    description: string;
    duration: number;
  };
}

export default function TopicToStudyCard({ topic }: ITopicToStudyCardProps) {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "100%", sm: "100%" },
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 40px 10px 40px",
        borderRadius: "16px",
        background: "var(--translucent-lilac)",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <img src={topic.image} alt="img topic" />
        <Box>
          <Typography variant="h6">{topic.title}</Typography>
          <Typography variant="body1">{topic.description}</Typography>
        </Box>
      </Box>
      <Typography sx={{ color: "var(--blue)" }}>{topic.duration}min</Typography>
    </Box>
  );
}
