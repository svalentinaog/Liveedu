import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

export const VerificationContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: 2,
  alignItems: "center",
  justifyContent: "center",
});

export const CodeInputContainer = styled(Box)({
  display: "flex",
  gap: "1em",
  marginTop: "1.5em",
});

export const CodeInput = styled(TextField)({
  width: "60px",
  height: "60px",
  borderRadius: "16px",
  "& input": {
    textAlign: "center",
    fontSize: "1.5em",
    padding: "0.5em",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
  },
});
