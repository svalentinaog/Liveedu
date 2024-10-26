import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const Head = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`;

export const HeadContent = styled(Box)`
  width: 100%;
  gap: 16px;
`;

export const GoBack = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`;

export const PageTitle = styled(Typography)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
