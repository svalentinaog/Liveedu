import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProfileContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;

  @media (min-width: 600px) {
    padding: 0 20px;
  }

  @media (min-width: 960px) {
    gap: 48px;
  }
`;

export const PersonalInfoContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  justify-content: space-between;

  @media (max-width: 600px) {
    min-height: 90vh;
  }

  @media (min-width: 600px) {
    min-height: 98vh;
  }
`;
