import { Box, Card, Typography } from "@mui/material";
import useCourseDetailViewModel from "../viewmodels/useCourseDetailViewModel";
import { AccessTime, MenuBook, PlayCircleOutline } from "@mui/icons-material";
import HistoryBack from "../components/HistoryBack";
import TopicsToStudy from "./TopicsToStudy";
import { btnNextMobileNone, MainButton, NextButton } from "../styles/mui";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CourseDetail() {
  const { course, courseNotFound } = useCourseDetailViewModel();

  if (courseNotFound) {
    return <Typography>Curso no encontrado</Typography>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "92vh", md: "98vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: { xs: 4, md: 6 },
        padding: "20px",
        marginBottom: { xs: 8, md: 2 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
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
          <Card
            sx={{
              width: "100%",
              boxShadow: "none",
              background: "transparent",
              border: "none",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={course?.image}
                alt="img course"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: 10,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "16px", md: "24px" },
                  }}
                >
                  {course?.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400px",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {course?.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <img src="/svg/coins.svg" alt="coins" />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "400px",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {course?.price}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                gap: 2,
              }}
            >
              {/* Duración */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <AccessTime sx={{ fontSize: { xs: "16px", md: "20px" } }} />
                <Typography
                  sx={{
                    fontWeight: "400px",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {course?.duration}
                </Typography>
              </Box>

              {/* Video */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <PlayCircleOutline
                  sx={{ fontSize: { xs: "16px", md: "20px" } }}
                />
                <Typography
                  sx={{
                    fontWeight: "400px",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {course?.videoCount} videos
                </Typography>
              </Box>

              {/* Temas */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <MenuBook sx={{ fontSize: { xs: "16px", md: "20px" } }} />
                <Typography
                  sx={{
                    fontWeight: "400px",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {course?.topicsCount} temas
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>

        <TopicsToStudy topics={course?.topics || []} />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Next mobile */}
        <MainButton sx={btnNextMobileNone} variant="contained">
          Buy now
        </MainButton>

        {/* Next Desktop */}
        <NextButton size="large" variant="text" endIcon={<ArrowForwardIcon />}>
          Buy now
        </NextButton>
      </Box>
    </Box>
  );
}
