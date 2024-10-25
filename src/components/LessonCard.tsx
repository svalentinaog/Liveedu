import { Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useState } from "react";

interface ILessonCardProps {
  lesson: {
    id: number;
    title: string;
    description: string;
  };
}

export default function LessonCard({ lesson }: ILessonCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

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
        transition: "transform 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.01)",
        },
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
        <Box>
          <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
            {lesson.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", md: "14px" } }}>
            {lesson.description}
          </Typography>
        </Box>
      </Box>

      <IconButton onClick={handleTogglePlay} sx={{ color: "primary.main" }}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
    </Box>
  );
}
