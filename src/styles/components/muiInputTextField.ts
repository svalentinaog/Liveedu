import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const InputTextField = styled(TextField)`
  width: 100%;
  border-radius: 16px;

  & .MuiOutlinedInput-root {
    border-radius: 16px;
  }

  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: var(--lilac);
  }

  &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: var(--blue);
  }

  &.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: var(--blue);
  }

  & .MuiInputBase-input {
    background-color: var(--white-app);
  }
`;
