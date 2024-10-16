import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";

interface ITopicToStudyCardProps {
  topic: {
    title: string;
    description: string;
    image: string;
  };
}

export default function TopicToStudyCard({ topic }: ITopicToStudyCardProps) {
  return (
    <Grid container spacing={2}>
      {/* Section 1 */}
      <Grid
        size={{ sm: 6, xs: 12 }}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: { xs: 0, md: 0, sm: 4 },
          height: { xs: "300px", md: "500px", sm: "800px" },
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "auto" },
            height: { xs: "100%", sm: "100%" },
            objectFit: { xs: "scale-down", sm: "contain" },
          }}
          src={topic.image}
          alt={topic.title}
        />
      </Grid>

      {/* Section 2 */}
      <Grid
        size={{ sm: 6, xs: 12 }}
        sx={{
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          padding: `0 16px 0 16px`,
        }}
      >
        {/* Content */}
        <Box
          sx={{
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              width: { xs: "100%", sm: "90%" },
              fontSize: { xs: "1.65em", sm: "3em" },
              lineHeight: "normal",
              letterSpacing: 0,
              fontWeight: 700,
            }}
          >
            {topic.title}
          </Typography>
          <Typography
            sx={{ width: "70%", fontSize: { xs: "0.95em", sm: "1.5em" } }}
          >
            {topic.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
