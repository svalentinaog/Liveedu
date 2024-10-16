import styled from "@emotion/styled";
import { Box, Button, FormControl, keyframes } from "@mui/material";
import { Grid } from "@mui/system";
import { Theme } from "@mui/material/styles";

// * SIGN IN, SIGN UP, ONBOARDING
export const formField = {
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

export const commonStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const gridElements = {
  width: "100%",
  maxWidth: "400px",
  gap: 2,
};

export const btnSubmit = {
  background: "linear-gradient(#bfc3fc, #a2c3fc)",
  textTransform: "capitalize",
  borderRadius: "16px",
  boxShadow: "none",
  padding: 1.75,
};

// * SPLASH SCREEN
export const FullScreenBox = styled(Box)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  position: "relative",
});

// Animación flotante
export const floatAnimation = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  `;

export const LogoContainer = styled(Box)({
  width: "150px",
  height: "150px",
  animation: `${floatAnimation} 3s ease-in-out infinite`,
});

export const LogoImage = styled("img")({
  width: "100%",
  height: "auto",
});

// * SignUp/SignIn pages STYLED
export const SignUpContainer = styled(Grid)({
  display: "flex",
  minHeight: "100vh",
});

export const Section1 = styled(Grid)(({ theme }: { theme: Theme }) => ({
  height: "100vh",
  display: "block",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const Section2 = styled(Grid)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  gap: theme.spacing(6),
}));

export const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  width: "100%",
  maxWidth: "400px",
});

export const StyledFormControl = styled(FormControl)({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: "100%",
});

export const StyledButton = styled(Button)({
  background: "linear-gradient(#bfc3fc, #a2c3fc)",
  textTransform: "capitalize",
  borderRadius: "16px",
  boxShadow: "none",
  padding: "1.75rem",
});

// * LAYOUT
