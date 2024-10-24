import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BackButton = styled(Button)`
  width: 100%;
  display: flex,
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 24px;
  text-transform: capitalize;
  color: var(--dark-gray);
  background: transparent;
  cursor: default;
`;
