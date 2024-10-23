import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface ITopicCardProps {
  topic: {
    image: string;
    title: string;
    description: string;
    duration: number;
  };
}

export default function TopicCard({ topic }: ITopicCardProps) {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "100%", sm: "100%" },
        display: "flex",
        justifyContent: "space-between",
        padding: { xs: "7px 20px 7px 20px", md: "10px 40px 10px 40px" },
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
          gap: { xs: 2, md: 4 },
        }}
      >
        <img src={topic.image} alt="img topic" />
        <Box>
          <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
            {topic.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", md: "14px" } }}>
            {topic.description}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ color: "var(--blue)", fontSize: { xs: "14px" } }}>
        {topic.duration}min
      </Typography>
    </Box>
  );
}
