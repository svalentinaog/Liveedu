import styled from "@emotion/styled";
import { Box, Button, FormControl, keyframes, TextField } from "@mui/material";
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
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
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
    width: '150px',
    height: '150px',
    animation: `${floatAnimation} 3s ease-in-out infinite`,
});

export const LogoImage = styled('img')({
    width: '100%',
    height: 'auto',
});

// * VERIFICATION CODE
export const VerificationContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
});

export const CodeInputContainer = styled(Box)({
    display: 'flex',
    gap: '1em',
    marginTop: '1.5em',
});

export const CodeInput = styled(TextField)({
    width: '60px',
    height: '60px',
    borderRadius: '16px', 
    '& input': {
        textAlign: 'center',
        fontSize: '1.5em',
        padding: '0.5em',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '16px', 
    },
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
  
  
  export const GradientBox = styled(Box)(({ theme }) => ({
    height: "100%",
    background: "linear-gradient(#bfc3fc, #a2c3fc)",
    borderRadius: "0 150px 150px 0",
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