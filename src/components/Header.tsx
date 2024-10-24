import { Link, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";

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
          xs: "0px 50px",
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
      <Link href={"/current-balance"}>
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="svg/coins.svg" alt="" />
          <Typography>400</Typography>
        </Box>
        <img src="" alt="" />
      </Link>
    </Grid>
  );
}

export default Header;
