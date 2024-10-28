import { Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface ILessonCardProps {
  lesson: {
    id: number;
    title: string;
    description: string;
  };
  isPlaying: boolean; // Indica si esta lección es la que se está reproduciendo
  onClick: (id: number) => void;
}

export default function LessonCard({
  lesson,
  isPlaying,
  onClick,
}: ILessonCardProps) {
  return (
    <Box
      onClick={() => onClick(lesson.id)}
      sx={{
        width: { xs: "100%", md: "100%", sm: "100%" },
        display: "flex",
        justifyContent: "space-between",
        padding: { xs: "7px 20px 7px 20px", md: "10px 40px 10px 40px" },
        borderRadius: "16px",
        background: isPlaying ? "var(--gradient)" : "var(--translucent-lilac)",
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
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onClick(lesson.id);
          }}
          sx={{
            color: "var(--blue)",
            background: "var(--translucent-gradient)",
            position: "initial",
            borderRadius: "50%",
            padding: "10px",
            width: "40px",
            height: "40px",
          }}
        >
          {/* Cambia el ícono dependiendo de si es la lección seleccionada y está reproduciéndose */}
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}
