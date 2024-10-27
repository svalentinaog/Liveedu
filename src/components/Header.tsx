import { Badge, Link, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <Grid
      sx={{
        width: { xs: "100vw", md: "100%" },
        height: "150px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: {
          xs: "0px 30px",
          md: "0px 50px",
          sm: "0px 50px",
        },
        borderRadius: "0px 0px 50px 50px",
        background: "var(--gradient)",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Hi, Robert
        </Typography>
        <Typography>Let's start learning</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, md: 4 },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href={"/current-balance"}
          sx={{ color: "var(--dark-gray)", textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            <img src="svg/coins.svg" alt="" />
            <Typography>400</Typography>
          </Box>
          <img src="" alt="" />
        </Link>
        <Badge badgeContent={1} color="warning">
          <NotificationsIcon color="action" />
        </Badge>
      </Box>
    </Grid>
  );
}

export default Header;
