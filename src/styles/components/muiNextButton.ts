import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const NextButton = styled(Button)`
  width: auto;
  border-radius: 16px;
  display: none;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  gap: 8px;
  text-transform: capitalize;
  color: var(--lilac);
`;
