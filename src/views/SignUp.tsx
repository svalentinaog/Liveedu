import { Box, Button, FormControl, TextField } from "@mui/material";
import UserAuth from "../viewmodels/UserAuth";
import { Link } from "react-router-dom";
import InputPasswordField from "../components/InputPasswordField";

export default function SignUp() {
  const { user, methods } = UserAuth();

  const fieldStyles = {
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

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "3em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <h1>Create new Account</h1>
        <p>
          Create a new account by filling in all the fields or log in to an
          existing account
        </p>
      </Box>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          gap: "1em",
        }}
      >
        <TextField
          label="Name"
          value={user.signUp_name}
          onChange={methods.updateField("signUp_name")}
          sx={fieldStyles}
        />

        <TextField
          label="Email"
          value={user.signUp_email}
          onChange={methods.updateField("signUp_email")}
          sx={fieldStyles}
        />

        <TextField
          label="Phone"
          value={user.signUp_phone}
          onChange={methods.updateField("signUp_phone")}
          sx={fieldStyles}
        />

        <InputPasswordField
          label="Password"
          value={user.signUp_password}
          onChange={methods.updateField("signUp_password")}
          sx={fieldStyles}
        />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <Button
          size="large"
          sx={{
            width: "500px",
            borderRadius: "16px",
            padding: 1.75,
            background: "linear-gradient(#bfc3fc, #a2c3fc)",
            textTransform: "capitalize",
            boxShadow: "none",
          }}
          variant="contained"
          onClick={methods.sendSigUpForm}
        >
          Create
        </Button>
        <p>
          Do you have an account? <Link to={"/sign-in"}>Login</Link>
        </p>
      </Box>
    </Box>
  );
}
