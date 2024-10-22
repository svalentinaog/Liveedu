import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";

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
    <Grid sx={{ width: { xs: "270px", md: "400px", sm: "300px" } }}>
      <Box sx={{ width: "100%", borderRadius: 30 }}>
        <img
          src={course.image}
          alt="img course"
          style={{ width: "100%", borderRadius: 30 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: 2,
          mt: 2,
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
    </Grid>
  );
}
