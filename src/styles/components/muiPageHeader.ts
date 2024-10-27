import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/system";

export const Head = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`;

export const HeadContent = styled(Grid)`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const GoBack = styled(Box)`
  width: 10%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex: 1;
`;

export const PageTitle = styled(Typography)`
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

export const PageOther = styled(Typography)`
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: end;
  align-items: end;
  flex: 1;
`;
