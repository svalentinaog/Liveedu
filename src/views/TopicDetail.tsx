import { IconButton, Typography, Card, Box } from "@mui/material";
import HistoryBack from "../components/HistoryBack";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Lessons from "./Lessons";
import useCourseDetailViewModel from "../viewmodels/useCourseDetail";
import { useState } from "react";

export default function TopicDetail() {
  const { topic } = useCourseDetailViewModel();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: 6 },
        padding: "20px",
        marginBottom: { xs: 8, md: 2 },
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

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="Course Watch"
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
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "space-between",
                px: 2,
                py: 0.5,
                bgcolor: "rgba(0, 0, 0, 0.3)",
                color: "white",
              }}
            >
              <Typography variant="body2">00:00</Typography>
              <Typography variant="body2">{topic?.duration}</Typography>
            </Box>
          </Card>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "16px", md: "24px" },
            }}
          >
            {topic?.title}
          </Typography>
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
      <Lessons lessons={topic?.lessons || []} />
    </Box>
  );
}
