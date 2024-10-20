import { Box } from "@mui/system";
import Header from "../components/Header";
import { Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: { xs: "0", md: "0 20px 0 20px", sm: "0 20px 0 20px" },
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: { xs: "20px" },
        }}
      >
        <Typography>Profile</Typography>
      </Box>
    </Box>
  );
}
