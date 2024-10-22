import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface ICourseCardProps {
  course: {
    starPoints: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
}

export default function CourseCard({ course }: ICourseCardProps) {
  return (
    <Card
      sx={{
        width: {
          xs: "300px",
          md: "400px",
          sm: "300px",
          boxShadow: "none",
          background: "transparent",
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        },
      }}
    >
      <Box sx={{ width: "100%", borderRadius: 30 }}>
        <img
          src={course.image}
          alt="img course"
          style={{ width: "100%", borderRadius: 30 }}
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
          <Typography variant="h5" sx={{ fontWeight: "medium" }}>
            {course.title}
          </Typography>
          <Typography variant="body2">{course.description}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="svg/coins.svg" alt="coins" />
          <Typography>{course.price}</Typography>
        </Box>
      </Box>
    </Card>
  );
}
