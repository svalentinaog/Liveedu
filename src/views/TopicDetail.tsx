import { IconButton, Typography, Card, Box } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { GoBack } from "../styles/mui";
import HistoryBack from "../components/HistoryBack";
import Lessons from "./Lessons";
import useCourseDetailViewModel from "../viewmodels/useCourseDetail";
import useVideo from "../viewmodels/useVideo";

export default function TopicDetail() {
  const { topic } = useCourseDetailViewModel();

  const {
    isPlaying,
    videoUrl,
    handleTogglePlay,
    handleLessonSelect,
    selectedLessonIndex,
  } = useVideo(topic?.lessons || [], 0);

  if (!topic) {
    return <Typography>Cargando...</Typography>;
  }

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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <GoBack>
          <HistoryBack />
        </GoBack>

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
                position: "relative",
                overflow: "hidden",
              }}
            >
              {isPlaying ? (
                <iframe
                  src={videoUrl + "?autoplay=1"}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              ) : (
                <img
                  alt="Watch"
                  src="https://cronicasfreelancer.com/wp-content/uploads/2024/03/saturacion.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
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

      <Lessons
        lessons={topic.lessons}
        onLessonSelect={handleLessonSelect}
        playingLessonIndex={selectedLessonIndex}
        isPlaying={isPlaying}
      />
    </Box>
  );
}
