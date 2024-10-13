import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/system";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import InputPasswordField from "../components/InputPasswordField";
import useUserAuthentication from "../viewmodels/useUserAuthentication";

export default function SignUp() {
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
            Create new Account
          </Typography>
          <Typography variant="body1">
            Create a new account by filling in all the fields or log in to an
            existing account
          </Typography>
        </Box>

        <FormControl
          sx={{
            ...commonStyles,
            ...gridElements,
          }}
        >
          <TextField
            label="Name"
            value={user.signUp_name}
            onChange={methods.updateField("signUp_name")}
            sx={formField}
          />

          <TextField
            label="Email"
            value={user.signUp_email}
            onChange={methods.updateField("signUp_email")}
            sx={formField}
          />

          <TextField
            label="Phone"
            value={user.signUp_phone}
            onChange={methods.updateField("signUp_phone")}
            sx={formField}
          />

          <InputPasswordField
            label="Password"
            value={user.signUp_password}
            onChange={methods.updateField("signUp_password")}
            sx={formField}
          />
        </FormControl>

        <Box
          sx={{
            ...commonStyles,
            ...gridElements,
          }}
        >
          <Button
            size="large"
            sx={btnSubmit}
            variant="contained"
            onClick={methods.handleSignUpForm}
          >
            Create
          </Button>

          <Typography variant="subtitle1">
            Do you have an account? <Link to="/sign-in">Sign In</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}