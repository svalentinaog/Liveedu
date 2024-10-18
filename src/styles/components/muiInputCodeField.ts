import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const InputCodeField = styled(TextField)`
  width: 60px;
  height: 60px;
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
    text-align: center; /* Propiedad corregida */
    font-size: 1.5em;
    padding: 0.5em;
    background-color: var(--white-app); /* Movido aquí para mayor claridad */
  }
`;
