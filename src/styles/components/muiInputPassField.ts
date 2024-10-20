import styled from "@emotion/styled";
import { FormControl } from "@mui/material";

export const InputPassField = styled(FormControl)`
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
