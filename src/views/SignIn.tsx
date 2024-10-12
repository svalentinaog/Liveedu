import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/system";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import InputPasswordField from "../components/InputPasswordField";
import useUserAuthentication from "../viewmodels/useUserAuthentication";

export default function SignIn() {
  const { user, methods } = useUserAuthentication();

  // Styles
  const formField = {
    borderRadius: "16px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#bfc3fc",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#a2c3fc",
    },
    "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#a2c3fc",
    },
    "& .MuiInputBase-input": {
      backgroundColor: "white",
    },
  };

  const commonStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const gridElements = {
    width: "100%",
    maxWidth: "400px",
    gap: 2,
  };

  const btnSubmit = {
    background: "linear-gradient(#bfc3fc, #a2c3fc)",
    textTransform: "capitalize",
    borderRadius: "16px",
    boxShadow: "none",
    padding: 1.75,
  };
  // end Styles

  return (
    <Grid container spacing={2}>
      {/* Section 1 */}
      <Grid
        size={{ sm: 6 }}
        sx={{
          ...commonStyles,
          height: "100vh",
          display: { sm: "block", xs: "none" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            background: "linear-gradient(#bfc3fc, #a2c3fc)",
            borderRadius: "0 150px 150px 0",
          }}
        ></Box>
      </Grid>

      {/* Section 2 */}
      <Grid
        size={{ sm: 6, xs: 12 }}
        sx={{
          ...commonStyles,
          alignItems: "center",
          minHeight: "100vh",
          padding: 2,
          gap: 6,
        }}
      >
        {/* Content */}
        <Box
          sx={{
            ...commonStyles,
            ...gridElements,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Welcome back
          </Typography>
          <Typography variant="body1">
            Sign in to an existing account using your phone number
          </Typography>
        </Box>

        <FormControl
          sx={{
            ...commonStyles,
            ...gridElements,
          }}
        >
          <TextField
            label="Email or Phone Number"
            value={user.signUp_email || user.signUp_phone}
            sx={formField}
          />

          <InputPasswordField
            label="Password"
            value={user.signIn_password}
            onChange={methods.updateField("signIn_password")}
            sx={formField}
          />
        </FormControl>

        <Box
          sx={{
            ...commonStyles,
            ...gridElements,
          }}
        >
          <Button size="large" sx={btnSubmit} variant="contained">
            Login
          </Button>

          <Typography variant="subtitle1">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
