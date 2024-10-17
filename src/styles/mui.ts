// * SIGN IN, SIGN UP, ONBOARDING

// Crear custom component (styled) tipo TextField para SignIn y SignUp:
export const formField = {
  borderRadius: "16px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--lilac)",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--blue)",
  },
  "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--blue)",
  },
  "& .MuiInputBase-input": {
    backgroundColor: "var(--white-app)",
  },
};
// end component

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

export * from "./pages/muiSplashScreen";
export * from "./pages/muiVerificationCode";
export * from "./components/muiMainButton";
