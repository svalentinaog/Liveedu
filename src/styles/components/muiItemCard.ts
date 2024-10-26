import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ItemCardContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 16px;
  gap: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--translucent-lilac);
  }
`;

export const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background-color: var(--translucent-lilac);
  width: 55px;
  height: 55px;
`;
