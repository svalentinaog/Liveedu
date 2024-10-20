import styled from "@emotion/styled";
import { Box, FormControl } from "@mui/material";

export const CustomForm = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  gap: 16px;
`;

export const CustomFormCode = styled(Box)({
  display: "flex",
  gap: "1em",
  marginTop: "1.5em",
});
