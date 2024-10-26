import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProfileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;

  @media (min-width: 600px) {
    padding: 0 20px;
  }

  @media (min-width: 960px) {
    gap: 48px;
  }
`;

export const ItemContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;

  @media (min-width: 960px) {
    padding: 0;
  }
`;
