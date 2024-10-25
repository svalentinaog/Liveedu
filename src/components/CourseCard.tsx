import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface ICourseCardProps {
  course: {
    id: number;
    starPoints: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
  onClick: (id: number) => void;
}

export default function CourseCard({ course, onClick }: ICourseCardProps) {
  return (
    <Card
      onClick={() => onClick(course.id)}
      sx={{
        width: {
          xs: "250px",
          md: "400px",
          sm: "300px",
        },
        boxShadow: "none",
        background: "transparent",
        border: "none",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: 8,
          overflow: "hidden",
          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
        <img
          src={course.image}
          alt="img course"
          style={{
            width: "100%",
            borderRadius: "inherit",
            transition: "transform 0.3s ease",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "16px", md: "24px" } }}
          >
            {course.title}
          </Typography>
          <Typography
            sx={{ fontWeight: "400px", fontSize: { xs: "12px", md: "16px" } }}
          >
            {course.description}
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
            <img src="svg/coins.svg" alt="coins" />
          </Box>
          <Typography
            sx={{ fontWeight: "400px", fontSize: { xs: "12px", md: "16px" } }}
          >
            {course.price}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
