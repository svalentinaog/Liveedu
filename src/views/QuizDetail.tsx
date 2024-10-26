import { IconButton, Typography, Card, Box } from "@mui/material";
import HistoryBack from "../components/HistoryBack";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useCourseDetailViewModel from "../viewmodels/useCourseDetailViewModel";
import { useState } from "react";
import { MainButton } from "../styles/mui";

export default function QuizDetail() {
  const { topic } = useCourseDetailViewModel();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90vh", md: "98vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: { xs: 4, md: 6 },
        padding: "20px 20px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <HistoryBack />
        </Box>

        <Box>
          <Card
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: "20px",
              background: "var(--white-app)",
              border: "none",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", md: "500px" },
                background: "var(--lilac)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="Quiz Watch"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <IconButton
              onClick={handleTogglePlay}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "var(--dark-gray)",
                background: "var(--gradient)",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Card>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "400px",
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            {topic?.description}
          </Typography>
        </Box>
      </Box>
      <MainButton>Next</MainButton>
    </Box>
  );
}
