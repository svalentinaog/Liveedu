import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const HistoryBackContainer = styled(Button)`
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
  padding: 0
`;

export const HistoryBackContent = styled(Box)`
  width: 100%;
  display: flex;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  background-color: transparent;
`;
